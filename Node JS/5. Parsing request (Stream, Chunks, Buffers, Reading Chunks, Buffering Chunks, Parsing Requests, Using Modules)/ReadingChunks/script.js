const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url === '/') {
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>HTML FORM</h1>
                <form action="/submit-details" method="POST">
                    <input type="text" placeholder="Enter full name" name="name">
                    
                    <br/><br/>

                    <label for="gender">Gender:</label>
                    <input type="radio" id='male' name="gender" value='male'>
                    <label for="male">Male</label>

                    <input type="radio" id='female' name="gender" value='female'>
                    <label for="female" >Female</label>
                    <button>Submit</button>
                </form>
            </body>
            </html>
        `);
        return res.end();
    }
    else if(req.url === '/submit-details' && req.method == 'POST') {
        let chunkArray = [];
        //Reading chunks
        req.on('data', chunk => {
            console.log(chunk);
            chunkArray.push(chunk);
        });

        //chunk buffering and converting into string
        req.on('end', () => {
            const parsedBody = Buffer.concat(chunkArray).toString();
            console.log(parsedBody);

            //1st WAY:
            /*parsedBody is like a URL then we passing into JS in-built function called "URLSearchParams" and applying for-of loop and storing values into emmptyObject called "bodyObject"*/
            // const bodyObject = {};
            const params = new URLSearchParams(parsedBody);
            // for(const [key, value] of params.entries()) {
            //     bodyObject[key] = value;
            // }
            // console.log(bodyObject);

            //2nd WAY:
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
        });

        fs.writeFile('createdByNode.txt', "Successfull created!", (err) => {
            if(err) console.log("Error occur: ", err);
            else console.log("DONE!");
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}).listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
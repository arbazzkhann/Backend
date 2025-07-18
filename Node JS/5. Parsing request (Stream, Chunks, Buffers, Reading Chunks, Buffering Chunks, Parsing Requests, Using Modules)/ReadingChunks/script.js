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
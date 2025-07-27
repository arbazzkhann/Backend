const handleServer = function(req, res) {
    if(req.url === '/') {
        res.write(`
            <html>
                <head><title>Main Page</title></head>
                <body>
                    <h1>Main Page</h1>
                    <nav>
                        <ul>
                            <a href='/form'><li>Form Page</li></a>
                        </ul>
                    </nav>
                </body>
            </html>
        `);
        return res.end();
    }

    else if(req.url === '/form') {
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Form Page</title>
            </head>
            <body>
                <h1>Form</h1>
                <form method="post" action="/result">
                    <input name='name' type="text" placeholder="Enter full name"> <br/><br/>

                    <label>Gender:</label>
                    <input id='male' name="gender" value="male" type="radio">
                    <label for="male">Male</label>
                    <input id='female' name="gender" value="female" type="radio">
                    <label for="female">Female</label>

                    <br/><br/>

                    <label for="city">City:</label>
                    <select name="city">
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                    </select>

                    <br/><br/>
                    
                    <button type="submit">Submit</button>
                </form>
            </body>
            </html> 
        `);
        return res.end();
    }

    else if(req.url === '/result' && req.method == 'POST') {

        //collecting chunks
        let collectionOfChunks = [];
        req.on('data', chunk => {
            collectionOfChunks.push(chunk);
        });
        console.log(collectionOfChunks)

        //buffering
        req.on('end', () => {
            const bufferBody = Buffer.concat(collectionOfChunks).toString();
            console.log(bufferBody)
            const params = new URLSearchParams(bufferBody);
            console.log(params);

            res.write(`
                <html>
                    <head><title>Main Page</title></head>
                    <body>
                        <h1>Your Details</h1>
                        <h2>Full Name: ${params.get('name')}</h2>
                        <h2>Gender: ${params.get('gender')}</h2>
                        <h2>City: ${params.get('city')}</h2>
                    </body>
                </html>
            `);
            return res.end();
        });
        return;
    }
    return res.end();
}

module.exports = handleServer;


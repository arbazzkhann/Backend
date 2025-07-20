const serverHandler = function(req, res) {
    if(req.url === '/') {
        res.write(`
            <html>
                <head><title>FORM INPUT</title></head>
                <body>
                    <form action='/result' method='post'>
                        <input placeholder='firstName' name='firstName'>
                        <input placeholder='lastName' name='lastName'>
                        <button type='submit'>submit</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }
    else if(req.url === '/result' && req.method == 'POST') {
        let collectChunks = [];
        req.on('data', chunks => {
            collectChunks.push(chunks);
        });

        req.on('end', () => {
            const chunksToURL = Buffer.concat(collectChunks).toString();
            
            const params = new URLSearchParams(chunksToURL);
            const bodyObject = Object.fromEntries(params);

            res.write(`
            <html>
            <head><title>Result</title></head>
            <body>
                <h1>Hello, ${bodyObject.firstName} ${bodyObject.lastName}</h1>
            </body>
            </html>
            `);
            return res.end();
        });
    }
}

module.exports = serverHandler;
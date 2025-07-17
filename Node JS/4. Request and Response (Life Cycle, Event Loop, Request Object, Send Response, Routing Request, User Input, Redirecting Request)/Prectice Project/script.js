/*
Question: Create a page that shows a navigation bar of Myntra with the following links:
            A. Home
            B. Men
            C. Women
            D. Kids
            E. Cart

            Clicking on each link page should navigate to that page and a welcome to selection text is shown there.
*/

const http = require('http');

const PORT = 3000;

http.createServer((req, res) => {
    
    if(req.url === '/') {
        res.write
        (`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Myntra</title>
            </head>
            <body>
                <nav>
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <a href="/men"><li>Men</li></a>
                        <a href="/women"><li>Women</li></a>
                        <a href="/kids"><li>Kids</li></a>
                        <a href="/cart"><li>Cart</li></a>
                    </ul>
                </nav>
            </body>
            </html>
        `);
        return res.end();
    }
    else if(req.url === '/men') {
        res.write("<h1>This is men page.</h1>");
        return res.end();
    }
    else if(req.url === '/women') {
        res.write("<h1>This is women page.</h1>");
        return res.end();
    }
    else if(req.url === '/kids') {
        res.write("<h1>This is kids page.</h1>");
        return res.end();
    }
    else if(req.url === '/cart') {
        res.write("<h1>This is cart page.</h1>");
        return res.end();
    }
    res.write("<h1>404 page not found.</h1>");
    res.end();

}).listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});


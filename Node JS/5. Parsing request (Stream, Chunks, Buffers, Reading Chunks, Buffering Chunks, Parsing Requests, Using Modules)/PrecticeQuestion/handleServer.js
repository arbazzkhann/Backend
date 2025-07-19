//custom functions
const sumRequestHandler = require('./sumRequestHandler');

const handleServer = (req, res) => {

    // '/' route:
    if(req.url === '/') {
        res.write(  `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Calculator</title>
            </head>
            <body>
                <h1>Node JS Prectice Question Solve</h1>
                <nav>
                    <ul>
                        <a href="/calculator"><li>Calculator</li></a>
                    </ul>
                </nav>
            </body>
            </html>
        `);
        return res.end();
    }

    // '/calculator' route:
    else if(req.url === '/calculator') {
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Calculator</title>
            </head>
            <body>
                <h1>Calculator</h1>
                <form action="/calculate-result" method="post">
                    <input type="text" name="firstNumber" placeholder="first number">
                    <input type="text" name="secondNumber" placeholder="second number">
                    <button>Sum</button>
                </form>
            </body>
            </html>
        `);
        return res.end();
    }

    // '/calculate-result' route:
    else if(req.url === '/calculate-result' && req.method == 'POST') {
        return sumRequestHandler(req, res);  //custom function
    }

    res.write(`<h1>404 page not found</h1>`);
    res.end();
}

module.exports = handleServer;
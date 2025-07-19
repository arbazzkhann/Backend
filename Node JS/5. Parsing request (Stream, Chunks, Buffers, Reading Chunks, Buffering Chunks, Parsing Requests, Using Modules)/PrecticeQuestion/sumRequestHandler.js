const sumRequestHandler = (req, res) => {
    console.log("In sum request handler", req.url);

    const body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
        const bodyString = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyString);
        const bodyObj = Object.fromEntries(params);
        const result = +bodyObj.firstNumber + +bodyObj.secondNumber;
        console.log(result);

        //displaying result on web-page:
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Calculator</title>
            </head>
            <body>
                <h1>Result</h1>
                <h3>The sum is ${result}</h3>
            </body>
            </html>
        `);
        return res.end();
    });
}

module.exports = sumRequestHandler;
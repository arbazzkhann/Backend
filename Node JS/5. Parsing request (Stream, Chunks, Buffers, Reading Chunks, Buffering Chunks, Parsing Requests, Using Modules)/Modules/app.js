//node.js core modules
const http = require('http');

//User defined Modules
const requestHandler = require('./script');

http.createServer(requestHandler).listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
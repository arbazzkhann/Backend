//creating connection
const http = require('http');
const handleServer = require('./handleServer');

const PORT = 3000;
http.createServer(handleServer).listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});
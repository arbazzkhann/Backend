const http = require('http');

const serverHandler = require('./serverHandler');

const PORT = 3001;

http.createServer(serverHandler).listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});
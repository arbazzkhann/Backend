//core modules
const http = require('http');

//userDefined Modules
const handleServer = require('./handleServer')

//PORT number
const PORT = 3001;

http.createServer(handleServer).listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});
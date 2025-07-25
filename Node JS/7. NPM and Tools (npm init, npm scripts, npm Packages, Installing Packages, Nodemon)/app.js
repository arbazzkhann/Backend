const http = require('http');

const PORT = 3000;

http.createServer((req, res) => {
    console.log(req);
}).listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
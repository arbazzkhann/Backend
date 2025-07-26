const http = require('http');

const PORT = 3001;

http.createServer((req, res) => {
    console.log(req);
}).listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
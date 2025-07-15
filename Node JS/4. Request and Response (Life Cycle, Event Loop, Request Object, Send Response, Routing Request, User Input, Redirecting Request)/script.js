const http = require('http');

const server = http.createServer((req, res) => {
   console.log(req.headers);

   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>Node Response</title></head>');
   res.write('<body><h1>I am from node.js response.</h1></body>');
   res.write('</html>');
   res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`);
});


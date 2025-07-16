const http = require('http');

const server = http.createServer((req, res) => {
   console.log(req.headers);

   res.setHeader('Content-Type', 'text/html');

   if (req.url === '/') {
      res.write('<html>');
      res.write('<head><title>Home</title></head>');
      res.write('<body><h1>Home page</h1></body>');
      res.write('</html>');
      res.end();
   }
   else if (req.url === '/about') {
      res.write('<html>');
      res.write('<head><title>About</title></head>');
      res.write('<body><h1>About page</h1></body>');
      res.write('</html>');
      res.end();
   }
   else {
      res.write('<html>');
      res.write('<head><title>Error</title></head>'); // ✅ fixed here
      res.write('<body><h1>404 page not found.</h1></body>');
      res.write('</html>');
      res.end();
   }
});

const PORT = 3001;
server.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`);
});


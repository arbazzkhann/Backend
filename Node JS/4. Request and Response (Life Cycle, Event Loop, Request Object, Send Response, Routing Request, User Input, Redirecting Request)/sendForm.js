const http = require('http');

http.createServer((req, res) => {

    if(req.url === '/') {
        res.write("<html>");
        res.write("<head><title>Rendering Form</title></head>");
        res.write("<body>");
        res.write("<form");
        res.write("<input type='text' name='username' placeholder='Enter your username'> <br/><br/>");
        res.write("<label for='gender'>Gender:</label><br/>");

        res.write("<input type='radio' id='male' name='gender' value='male'>");
        res.write("<label for='male'>Male</label><br/>");

        res.write("<input type='radio' id='female' name='gender' value='female'>");
        res.write("<label for='female'>Female</label><br/><br/>");

        res.write("<button type='submit'>Submit</button>");
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    res.write("<html>");
    res.write("<head><title>Rendering Form</title></head>");
    res.write("<body>");
    res.write("<h1>This is Home Page.</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();

}).listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});


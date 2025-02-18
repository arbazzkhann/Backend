/*
Q. What is EJS (Embedded JavaScript):
    => EJS or Embedded JavaScript is a template engine for JavaScript that is used for web development which allows users to generate dynamic HTML markup using JavaScript code within HTML templates. 

    => It is designed to simplify the process of rendering dynamic content in web applications. 

    => It contains a mixture of HTML and JavaScript which makes it easy to generate dynamic content based on data from your application.


Features of EJS:
    => Dynamic Content: EJS enables the generation of HTML and JavaScript content dynamically within HTML tags, enhancing flexibility in content creation.

    => Layout and Partials: EJS supports layouts and partials, allowing users to break templates into reusable components, reducing code duplication and enhancing maintainability.

    => Error Handling: EJS provides error messages that aid developers in debugging, improving the overall development experience.

EJS setup:
    1. EJS install : npm i ejs
    2. configure EJS : app.set("view engine", "ejs");
    3. create 'views' folder/directory
    4. create 'ejs files' in 'views' folder/directoris
    5. use replace 'render' from 'send'
    6. make sure in 'render function' you should use name of any 'views folder' ejs file but do not use '.ejs' in it

*/

const express = require('express');
const app = express();

app.set("view engine", "ejs");

//rendering main/home route
app.get('/', function(request, response) {
    response.render("index", {age: 12});
});

//rendering about route
app.get('/about', function(request, response) {
    let name = "Arbaz"
    response.render("about", {name, university: "IIT Delhi"});
});

app.listen(3000);
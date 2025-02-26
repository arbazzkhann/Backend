for session creation:
    1. install express-session => npm i express-session
    2. require express-session => require("express-session");
    3. In app.js 
        =>  app.use(session({
                resave: false,
                saveUninitialized: false,
                secret: "anyRandomText"
            }));
    4. 
    
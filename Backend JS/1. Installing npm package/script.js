//Go to npm package website: https://www.npmjs.com/
//search any npm package
//you can install npm package with 'npm i package_name'
//you can use this package with its documentation

//In this example with use 'figlet' package

//1. npm install figlet
/*2. var figlet = require("figlet");

    figlet("Hello World!!", function (err, data) {
        if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
        }
        console.log(data);
    });
*/

let figlet = require('figlet')

figlet("MD. Farhan", function (err, data) {
    if(err) {
        console.log("Something went wrong!!");
        console.log(err);
        return;
    }
    console.log(data);
});
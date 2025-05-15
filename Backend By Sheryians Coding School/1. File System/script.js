//writeFile
//appendFile
//copyFile
//rename
//unlink
//mkdir


const fs = require('fs');

// //File creation:
// fs.writeFile("hello.txt","i am created with node js", (err) => {
//     if(err) throw err
//     else console.log("done");
// });


// //Append file:
// fs.appendFile('hello.txt', 'Appended text', (err) => {
//     if(err) throw err
//     else console.log("done");
// });


// //Copy file:
// fs.copyFile('hello.txt', './copy/copy.txt', (err) => {
//     if(err) throw err
//     else console.log("done");
// });


// //File rename:
// fs.rename("hello.txt","renamed.txt", (err) => {
//     if(err) throw err
//     else console.log("done");
// });


// //unlink (remove file):
// fs.unlink('hello.txt', function(err) {
//     if(err) throw err
//     else console.log("done");
// });

// //Make directory:
// fs.mkdir('hell', true,function(err) {
//     if(err) throw err
//     else console.log(err);
// });

// //Remove directory:
// fs.rmdir('hell', function(err) {
//     if(err) throw err
//     else console.log('done');
// });
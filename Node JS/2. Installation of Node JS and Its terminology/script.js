const fs = require('fs');

// fs.writeFile('firstFile.txt', 'Hello i am created by node.js', (err) => {
//     if(err) throw err;
//     else console.log("Done");
// });

fs.appendFile('firstFile.txt', "I am appended text", (err) => {
    if(err) throw err;
    else console.log("File successfull appended.");
});
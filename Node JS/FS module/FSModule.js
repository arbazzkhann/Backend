const fs = require('fs');

fs.writeFile("temp.txt", "Hello i am created by node js", (err) => {
    if(err) console.log("Error occur: ", err);
    else console.log("Done");
})
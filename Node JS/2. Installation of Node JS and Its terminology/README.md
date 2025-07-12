## Installation Node.JS in Windows:
Download and Install latest version of Node.js ([text](https://nodejs.org/en/download))

## Command for Node.js:
* check version:
```bash
node --version
```

## What is IDE?
1. IDE stands for **Integrated Development Environment**.
2. Software suite that **consolidates basic tools** required for Software Development.
3. **Central hub** for **coding**, **finding problems**, and **testing**.
4. Designed to **improve developer efficiency**.


## FS (File System) Module in Node.js:

1. Create file (writeFile): 
```js
const fs = require('fs');

fs.writeFile('firstFile.txt', 'Hello i am created by node.js', (err) => {
    if(err) throw err;
    else console.log("Done");
});
```

2. Adding extra text (appendFile):
```js
fs.appendFile('firstFile.txt', "I am appended text", (err) => {
    if(err) throw err;
    else console.log("File successfull appended.");
});
```
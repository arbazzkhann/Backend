## Installation Node.JS in Windows:
Download and Install latest version of Node.js ([Download](https://nodejs.org/en/download))

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


## Executing **first.js** file:
1. **Streamlines Node Command**: Use node **filename.js** to executes a JavaScript file in the Node.js environment.
2. **Require Syntax**: Use **require("Module")** to include built-in or external modules, or other JavaScript files in your code.
3. **Modular Code**: require helps organize **code into reusable modules**, separating concerns and **imporves maintainability**.
4. **Caching**: Modules loaded with require are cached, meaning the file is **executed only once** **even if included multiple time**.


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


## What is REPL?
1. **Streamlines Interactive Shell**: Executes JavaScript code interactively.
2. **Quick Testing**: Ideal for **testing** and **debugging code** snippets on the fly.
3. **Built-in Help**: Offers help command via **.help**.
4. **Session Management**: Supports saving (**.save**) and loading (**.load**) code sessions.
5. **Node.js API Access**: Provides **direct access to Node.js API** for experimnenation.
6. **Customizable**: Allows **customization of prompt** and **behaviour settings**.
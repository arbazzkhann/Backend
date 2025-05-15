# Node - File System

* Create File (writeFile)
* Append File (appendFile)
* Copy File (copyFile)
* Rename File (rename)
* Remove File (unlink) 
* Make Directory (mkdir)
* Remove Directory (rmdir)

```js
const fs = require('fs');
```

1. File Create (writeFile):
```js
fs.writeFile("hello.txt","i am created with node js", (err) => {
    if(err) throw err
    else console.log("done");
});
```

2. Append File (appendFile):
```js
fs.appendFile('hello.txt', 'Appended text', (err) => {
    if(err) throw err
    else console.log("done");
});
```

3. Copy file (copyFile):
```js
fs.copyFile('hello.txt', './copy/copy.txt', (err) => {
    if(err) throw err
    else console.log("done");
});
```

4. Rename File (rename):
```js
fs.rename("hello.txt","renamed.txt", (err) => {
    if(err) throw err
    else console.log("done");
});
```

5. Remove File (unlink):
```js
fs.unlink('hello.txt', function(err) {
    if(err) throw err
    else console.log("done");
});
```

6. Make Directory (mkdir):
```js
//Make directory:
fs.mkdir('hell', true,function(err) {
    if(err) throw err
    else console.log(err);
});
```

7. Remove Directory (rmdir):
```js
// //Remove directory:
fs.rmdir('hell', function(err) {
    if(err) throw err
    else console.log('done');
});
```
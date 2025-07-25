# NPM and Tools
NPM stands for **Node Package Manager**.


## npm init?
* npm init is a **command** used to **create a package**.
* **json file** in a **Node.js project**. 
* This file **stores information about the project** and its **dependencies**.

## Why use npm init?
* To **start a new Node.js project.**
* To **manage project dependencies**.
* To **define scripts**, **version**, **entry point**, and more.
* Required for **publishing packages to npm**.


### Basic Syntax:
```bash
npm init
```

#### *It will ask you several questions like:
* name: Name of the project
* version: Project version (default is 1.0.0)
* description: A short description
* entry point: File to run first (default is index.js)
* test command: Command to run tests
* git repository: URL of the project repo
* author: Your name
* license: Project license (default is ISC)'

> It will create **package.json** file.


#### *Faster Version (Without asking questions):
```bash
npm init -y
```

##### Example:
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Arbaz Khan",
  "license": "ISC"
}
```

### After npm init you can:
* Install packages with npm install.
* Run scripts like npm start or npm test.
* Share your project easily.
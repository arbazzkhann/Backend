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


## NPM Scripts
* NPM scripts are commands you define inside the package.json file.
* They are used to automate tasks like running your app, testing, building, etc.

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node app.js",     // Run using: npm start
  "arbaz": "node app.js"      // Run using: npm run arbaz
}
```

#### Reserved Script Names (No run keyword needed):
* "start" → run as npm start
* "test" → run as npm test

> These are special and do not require npm run.

#### Custom Script Names:
* any other name (like "arbaz", "build", "dev") must be run using:

```bash
npm run script_name
```
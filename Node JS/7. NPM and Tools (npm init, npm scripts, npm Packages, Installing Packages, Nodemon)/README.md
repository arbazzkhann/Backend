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


## NPM Packages:
1. NPM: **Node.js package manager** for code sharing.
2. Package: *Reusable code* or *library*.
3. package.json: Defines package metadata and dependencies.
4. Versioning: Manages different package versions.
5. Local/Global: Install packages Locally and Globally.
6. Registry: Public storage for open-source packages.
* Example: **Express**, **React**, **Nodemon**, etc.

## Installing Packages:
```bash
npm install <package_name>
```

1. **--save**: Adds the package to the *project's dependencies* in package.json.
2. **--save-dev** OR **-D**: Adds the package to the *project's devDependencies*.
3. **--global** OR **-g**: Install the package *globally*, making it *available system-wide*, not just in a specific project.
4. **--save-exact**: Installs the *exact version* specified without updating for newer versions.
5. **--force**: *Forces npm to fetch and install packages* even if they are already installed.


## devDependencies:
devDependencies are the packages/modules required only during development of a Node.js application, not in production.

> devDependencies are available in package.json file.


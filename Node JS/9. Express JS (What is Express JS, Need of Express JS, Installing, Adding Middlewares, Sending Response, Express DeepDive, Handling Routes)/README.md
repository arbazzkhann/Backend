# Express.js

## What is Express.js ?

1. Express.js is a minimal and flexible **web application framework for Node.js**.
2. It provides a robust set of **features for building single-page**, **multi-page**, and **hybrid** web applications.
3. Express.js **simplifies server-side coding** by providing a **layer of fundamentals web application features**.


## Need of Express.js:

1. **Express.js Simplifies Server Creation**: Helps in **quickly setting** up and **running a web server without the need for complex coding**.
2. **Routing Management**: Provides a **powerful routing machanism** to **handle URLs** and **HTTP methods** effectively.
3. **Middleware Support**: Allows the use of **middleware to handle requests**, **response**, and **any middle operations**, making **code modular** and **maintainable**.
4. **API Development**: Facilitates **easy and efficient creation of RESTful APIs**.
5. **Community and Plugins**: Has a **large ecosystem** with **numerous plugins** and **extensions**, **accelerating development time**.


## Installation of Express.js:
 
```bash
npm install express
```

OR 

To Install Express temporarily and not add it to the dependencies list:
```bash
npm install express --no-save
```


## Middleware:
* In Express.js, middleware is a **function** that has **access to the request** (req), **response** (res), and the **next middleware** in the cycle.

* It is used to **modify requests** and **responses**, **execute any code**, **end the request-response cycle**, or **call the next middleware** in the stack.

![middleware](image.png)

### Example:
![middleware example](image-1.png)


## What is **next** in Express.js?
* In Express.js middleware, **next is a function** that tells Express to move to the **next middleware** or **route handler** in the stack.
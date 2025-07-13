
# DNS and Web Working Concepts

## DNS

1. **DNS** stands for **Domain Name Service**.  
   _Example_: User types a domain (e.g., `www.example.com`) into the browser.
2. **DNS Query**: The browser sends a DNS query to resolve the domain into an IP address.
3. **DNS Server**: Provides the correct **IP address for the domain**.
4. **Browser Connects**: The browser uses the IP to connect to the web server and loads the website.

![DNS Basic Flow](image.png)

---

## How Actual DNS Works

1. **Root DNS**: Acts as the starting point for DNS resolution. It directs queries to the correct TLD server (e.g., `.com`, `.org`).
2. **TLD (Top-Level-Domain) DNS**: Handles queries for specific top-level domains (e.g., `.com`, `.net`) and directs them to the authoritative DNS server (e.g., Verisign for .com, PIR for .org).
3. **Authoritative DNS**: Contains the actual IP address of the domain and answers DNS queries with this information (e.g., Cloudflare, Google DNS).

![DNS Resolution Process](image-1.png)

---

## How Web Works

1. **Client Request Initiation**: The client (browser) initiates a network call by entering a URL.
2. **DNS Resolution**: The browser contacts a DNS server to get the IP address of the domain.
3. **TCP Connection**: The browser **establishes a TCP connection** with the server's IP address.
4. **HTTP Request**: The browser sends an HTTP request to the server.
5. **Server Processing**: The server processes the request and prepares a response.
6. **HTTP Response**: The **server sends** an **HTTP response back to the client**.
7. **Network Transmission**: The **response travels back to the client** over the network.
8. **Client Receives Response**: The browser receives and interprets the response.
9. **Rendering**: The browser renders the content of the response and displays it to the user.

![How Web Works](image-2.png)

---

## What Are Protocols?

### HTTP (Hyper Text Transfer Protocol)
- **Facilitates communication between a web browser** and **server** to **transfer web pages**.
- Sends data in **plain text** (**no encryption**).
- Used for basic website **browsing without security**.

### HTTPS (Hyper Text Transfer Protocol Secure)
- **Secure version of HTTP**, **encrypts data** for secure communication.
- Uses **SSL/TLS** to encrypt data.
- Used in **online banking, e-commerce**, etc.

### TCP (Transmission Control Protocol)
- **Ensures reliable**, **ordered**, and **error-checked** data delivery over the internet.
- Establishes a **connection before data is transferred**.

![Protocols Diagram](image-3.png)

---

## Node.js Core Modules

- **Built-in**: Core modules are included with Node.js installation.
- **No Installation Needed**: Directly available for use without npm installation.
- **Performance**: Highly optimized for performance.

### Common Core Modules

1. **fs** – Handles file operations.
2. **http** – Creates HTTP servers and makes HTTP requests.
3. **https** – Launches an SSL server.
4. **path** – Provides utilities for file path handling.
5. **os** – Provides OS-related utility methods.
6. **events** – Handles events and event-driven programming.
7. **crypto** – Offers cryptographic functionalities like hashing and encryption.
8. **url** – Parses and formats URL strings.

![Node.js Core Modules](image-4.png)

---

## `require` Keyword in Node.js

1. **Purpose**: Used to **import modules** in Node.js.
2. **Caching**: Modules are **cached after the first call** to `require()`.
3. **Extension Optional**: `.js` is **automatically assumed**, no need to include it.  
   _Example_: `require('fs')` instead of `require('fs.js')`
4. **Path Resolution**: Node.js searches for modules in:
   - Core modules
   - `node_modules`
   - File paths

### Syntax

```js
const moduleName = require('module');

// Load the built-in http module
const http = require('http');

// Load the third-party express module
const express = require('express');

// Load a custom module
const myModule = require('./myModule');
```

---

## Creating First Node.js Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}, http://localhost:${PORT}`);
});
```

# What is Node.js :
1. **JavaScript Runtime**: Node.js is an **open-source**, **cross-platform runtime environment** for executing Javascript code outside of a browser.

2. Node.js is a JavaScript in a different environment means Running JS on the server or any computer.

3. Built on **Chrome's V8 Engine**: It runs on the V8 engine, which compiles JavaScript directly to native machine code, enhancing performance.

4. V8 is written in C++ for speed.

5. **V8 engine** + **Backend Features** = **Node.js**

## Node.js Pros:
1. **Design**: Features an event-driven, non-blocking I/O model for efficiency.

2. **Full-stack**: Allows using JavaScript on both **Server** and **Client** sides.

3. **Scalability**: **Ideal for scalable network applications** due to **its architecture**.

4.  **Versatility**: Suitable for **web**, **real-time chat** and **REST API Servers**.


## Node.js Features:
1. **Non-blocking I/O**: Designed to **perform non-blocking operations by default**, making it suitable for I/O-heavy operations.

2. **Network Support**: **Supports TCP/UDP sockets**, which are crucial for building lower-level network applications that browsers can't handle.

3. **File System Access**: **Provides APIs** to **read** and **write** **files directly**, which is not possible in browser environments for security reasons.

4. **Server-side capabilities**: Node.js **enables JavaScript to run on the server**, **handling HTTP requests**, **file operations**, and **other server-side functionalities**.

5. **Modules**: Organize code into reusable modules using **require()**.


## JavaScript on Client-side:
1. **Displays Web Page**: Turns HTML code into what you see on screen.

2. **User Clicks**: Helps you interect with the web pages.

3. **Updates Content**: Allows changes to the page using JavaScript.

4. **Loads Files**: Gets HTML, images, etc. form the server.


## JavaScript on Server:
1. **Database Managemen**t: Stores, retrives, and manages data efficiently through operations like CRUD (Create, Read, Update, Delete).

2. **Authentication**: Varifies user identities to control access to the system, ensuring that users are who they claim to be.

3. **Authorization**: Determines what authenticated users are allowed to do by managing permissions and access controls.

4. **Input Validations**: Checks incoming data for correctness, completeness, and security to prevent malicious data entry and errors.

5. **Session Management**: Tracks users activity across various requests to maintain state and manage user-specific settings.


## Client VS Server code:
1. **User/Client can't access server code directly**.

2. **Client must raise requests** for particular APIs to access certain features or data.

3. **Environment Access**: Server-side JavaScript **accesses server features** like file systems and databases.

4. **Security**: Server-side code can **handle sensitive operations securely**, while **client-side code is exposed** and must manage security risks.

5. **Performance**: Heavy computations are **better performed on the server** to **avoid slowing down the client system/performance**.
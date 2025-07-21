## Event Driven:

![alt text](image.png)

1. User Action (Click Here):
    * A user performs an action (e.g., clicking a button or sending a request).
    * This action triggers an event in Node.js.

2. Event Listener:
    * Node.js uses the EventEmitter module, where an event listener is set up to listen for specific events (like click, data, request, etc.).
    * Example:
        ```js
        button.on('click', () => {
        console.log('Button clicked!');
        });
        ```

3. Event Queue (Callback Queue):
    * When the event occurs, the callback (associated function) does not run immediately.
    * Instead, the event is placed into the event queue (also known as the callback queue).
    * This queue holds all callbacks waiting to be processed.

4. Event Loop:
    * The event loop continuously checks if the call stack is empty and if there are any pending events in the event queue.
    * If the call stack is free, the event loop moves the callback from the event queue to the call stack for execution.

5. Event Handler (Callback Execution):
    * The event handler (callback function) is executed.
    * For example, if a button was clicked, the function linked to that click event will now run.


## Single Thread:

![alt text](image-1.png)

1. Requests Enter Node.js:
    * Incoming requests or tasks (e.g., HTTP requests, timers, or I/O operations) are received by Node.js.
    * Node.js is single-threaded, but it can handle multiple tasks using asynchronous operations.

2. Event Loop Starts (Single Thread):
    * The event loop constantly runs in a loop, checking for new tasks and callbacks that need to be executed.

3. Register Callback:
    * When an intensive operation (e.g., reading a file, accessing a database, or performing heavy computations) is requested:
        * Node.js registers a callback function for this task.
        * The heavy work is delegated to Node.js worker threads (through libuv).

4. Intensive Operation (Async Tasks):
    * These tasks are handled in the background (e.g., file system operations, network requests, or database queries).
    * The main thread is not blocked during this time.

5. Operation Complete:
    * When the background task finishes, it signals the event loop that it’s done.

6. Trigger Callback:
    * The callback function (that was registered earlier) is placed in the event queue.
    * The event loop picks it up when the call stack is empty and executes it.


### Single Threaded (Key Points):
* Event loop is the core mechanism that allows Node.js to perform non-blocking I/O.
* Heavy tasks (I/O or DB queries) are sent to worker threads (via libuv), not executed directly in the main thread.
* Callbacks are executed only when the main call stack is clear.
* Node.js remains fast because it never waits for operations—it delegates and continues.
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



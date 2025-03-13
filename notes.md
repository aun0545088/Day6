Why Use Node.js for Backend?
   -Scalability – Handles many requests using a single-threaded model.
   -Fast Execution – V8 engine compiles JS to machine code.
   -Asynchronous & Non-blocking – Handles tasks efficiently.
   -Rich Ecosystem – NPM provides many third-party modules.

   -Call Stack: Executes synchronous JavaScript code.
   -Timer (libuv): Handles setTimeout, scheduling it for execution after a delay.
   -Callback Queue: Stores completed timers (setTimeout) and waits for execution.
   -Microtask Queue: Stores resolved Promises and has higher priority than the Callback Queue.
   -Event Loop: Moves tasks from the Microtask Queue and Callback Queue to the Call Stack when it's empty.
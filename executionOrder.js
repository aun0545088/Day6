const fs = require("fs");

console.log("1️⃣ Synchronous Log - Start");

// Microtask (Highest priority after sync code)
process.nextTick(() => console.log("2️⃣ process.nextTick - Executes before Promises"));

// Promise (Microtask)
Promise.resolve().then(() => console.log("3️⃣ Promise - Executes after nextTick"));

// Timer (setTimeout 0ms)
setTimeout(() => console.log("4️⃣ setTimeout(0) - Executes in Timer Phase"), 0);

// Timer (setTimeout 100ms, runs once)
setTimeout(() => console.log("5️⃣ setTimeout(100ms) - Executes after File I/O"), 100);

// File I/O operation (Executes in the I/O Phase)
fs.readFile(__filename, () => {
  console.log("6️⃣ File I/O - Executes in I/O Phase");

  // Adding another microtask inside I/O callback
  process.nextTick(() => console.log("7️⃣ process.nextTick inside I/O - Executes before Timers"));
  
  // Promise inside I/O callback
  Promise.resolve().then(() => console.log("8️⃣ Promise inside I/O - Executes after nextTick inside I/O"));

  // One-time execution using setTimeout (instead of setInterval)
  setTimeout(() => console.log("9️⃣ setTimeout inside I/O - Executes once"), 50);
});

console.log("🔟 Synchronous Log - End");



/* 
1️⃣ Synchronous Log - Start
🔟 Synchronous Log - End
2️⃣ process.nextTick - Executes before Promises
3️⃣ Promise - Executes after nextTick
4️⃣ setTimeout(0) - Executes in Timer Phase
6️⃣ File I/O - Executes in I/O Phase
7️⃣ process.nextTick inside I/O - Executes before Timers
8️⃣ Promise inside I/O - Executes after nextTick inside I/O
9️⃣ setTimeout inside I/O - Executes once
5️⃣ setTimeout(100ms) - Executes after File I/O
 */
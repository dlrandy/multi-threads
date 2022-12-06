console.log("hello from main.js");
const worker = new Worker("worker.js");
worker.onmessage = (msg) =>console.log(`meesage received from worker: ${msg.data}`);
worker.postMessage("message sent to worker.js");
console.log("hello from end of main.js");
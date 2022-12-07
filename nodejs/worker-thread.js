const { Worker, isMainThread, workerData, parentPort } = require("worker_threads");
const assert = require("assert");
if (isMainThread) {
  const worker = new Worker(__filename, { workerData: { num: 42 } });
  worker.on("message", msg=> worker.postMessage(msg))
} else {
  assert.strictEqual(workerData.num, 42);
 parentPort.on("message", msg=>console.log("got a message from the main thread", msg));
 parentPort.postMessage("hello world from non main thread")
}

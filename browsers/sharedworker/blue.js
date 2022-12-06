console.log("blue.js");
const worker = new SharedWorker("shared-worker.js");
worker.port.onmessage = (event)=>console.log('Event', event.data);
window.addEventListener("beforeunload", ()=>{
    worker.port.postMessage('close');
})

const {
    Worker,
    isMainThread,
    MessageChannel,
    workerData
} = require('worker_threads');

if (isMainThread) {
    const {port1, port2} = new MessageChannel();
    const worker = new Worker(__filename,{
        workerData:{
            port:port2
        },
        transferList:[port2]
    });
    port1.on("message", msg=>{
 console.log("msg ", msg);
        port1.postMessage(msg+"!!!!!!!");});
} else {
    const {port} = workerData;
    port.on("message", msg=>{
        console.log("got a message from main thread", msg);
    });
    port.postMessage('Hwlloe world')
}

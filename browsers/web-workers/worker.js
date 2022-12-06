console.log("hello from worker.js");

self.onmessage = (msg)=>{
    console.log("message from mian", msg.data);
    postMessage("message sent from worker");
}


self.onmessage = ({data:buffer})=>{
    buffer.foo = 32;
    const view = new Uint8Array(buffer);
    view[0] = 3;
    console.log("updated in wortker");
}
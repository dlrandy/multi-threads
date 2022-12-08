const buffer = new ArrayBuffer(16);

 
const view64 = new Float64Array(buffer);
view64[0] = 1.1234567890123456789;
console.log(view64[0]);
console.log(view64[1],'-----');


const view32 = new Float32Array(buffer);
view32[2]= 1.1234567890123456789;
console.log(view32[0]);
console.log(view32[2]);
console.log(view64[1]);


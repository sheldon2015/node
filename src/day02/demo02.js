
//低位字节排放在内存的低地址端，高位字节排放在内存的高地址端；
//Big-Endian(BE)就是高位字节排放在内存的低地址端，低位字节排放在内存的高地址端
/**
 *    0x4e59= 0x000000004e59   (->由高位到低位)
 *    <Buffer 00 00 00 00 00 00 4e 59>   (->由低位到高位)
 *
 */
var b = new Buffer(8);
b.writeUIntBE(0x000000004e59, 0, 3);
console.log(b);

var b = new Buffer(8);
b.writeUIntLE(0x000000004e59, 0, 3);
console.log(b);
console.log('-------------------------------------')
var buf = new Buffer(6);
buf.writeIntBE(0x000000004e59, 0, 6);
console.log(buf);
console.log('-------------------------------------')



var b = new Buffer(['aaa', 'b', 'c', 'd', 'f']);
console.log(b);
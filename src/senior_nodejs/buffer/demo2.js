/**
 * 内存中的原始的二进制数据是相同的的，通过不同的编码，表现不同的字符串
 */

var buff = new Buffer('SGVsbG8gTm9kZQ==');
console.log(buff);
console.log(buff.toString());//SGVsbG8gTm9kZQ==

var buff = new Buffer('SGVsbG8gTm9kZQ==', 'utf8');//这个'SGVsbG8gTm9kZQ==是utf8格式的字符串
console.log(buff);
console.log(buff.toString('utf8'));

var buff = new Buffer('SGVsbG8gTm9kZQ==', 'base64');//这个'SGVsbG8gTm9kZQ==是base64格式的字符串
console.log(buff)
console.log(buff.toString('utf8'))//Hello Node

var buff = new Buffer([1, 2, 3, 4, 5, 16]);//数组中的值用10进制表示的的数，每个数为8字节，创建buffer实例。
console.log(buff);

var buffer2 = new Buffer(buff);
console.log(buffer2.writeInt8(127));
console.log(buffer2);

var buf = new Buffer(2);
buf.writeInt8(-16, 0);
buf.writeInt8(-2, 1);
console.log(buf);
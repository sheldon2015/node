//获取字符串的长度byteLength(string:)

// console.log(Buffer.byteLength('aaaaa'))

//buffer中写入字符串

/**
 * write不会截断字符串，写入内存分配不足的buffer中
 */

// var b = new Buffer(1);
// var 写入;

// 写入 = b.write('a');
// console.log(b);
// console.log(写入);//1

// 写入 = b.write('é');
// console.log(b);
// console.log(写入);//0

//
var b = new Buffer(5);
b.write('fffff');
console.log(b);
b.write('ab', 1);
console.log(b);







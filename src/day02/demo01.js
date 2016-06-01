var buf = new Buffer(10);
console.log(buf);
console.log(buf.toString() + ' end');
var buf = new Buffer([buf[0], buf[1]]);
console.log(buf);
console.log(buf.toString() + ' end');
//数组创建buffer对象
var buf = new Buffer([10, 20]);
console.log(buf);
console.log(buf.toString() + ' 1end');
var buf = new Buffer("www.runoob.com", "utf-8");
console.log(buf);
console.log(buf.toString() + ' end');
var json = buf.toJSON(buf);

console.log(json);
var buf = new Buffer("中", "utf-8");
console.log(buf);
console.log(buf.toString() + ' end');

var buf = new Buffer(6);
buf.writeUIntBE(0x123, 0, 2);
console.log(buf);


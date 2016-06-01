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
var buf = new Buffer("www.runoob.com");
console.log(buf);
console.log(buf.toString() + ' qqqqqqend');
var json = buf.toJSON(buf);

console.log(json);



var b = new Buffer(['a', 'b', 'c', 'd', 'f']);
console.log(b);


var buf = new Buffer("我");
console.log(buf);
console.log(buf.toString() + ' utf-8end');

var buf = new Buffer("我", "utf16le");
console.log(buf);
console.log(buf.toString('utf16le') + ' utf16leend');
///////////////////////













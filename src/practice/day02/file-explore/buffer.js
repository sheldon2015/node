// var b = new Buffer(11);
// console.log(b);
// // b.toString();
// console.log(b);

// console.log(b.write('fffff'));
// console.log(b);



// console.log(b.write('abcdefghi', 1));
// console.log(b);


// var fs = require('fs');
// var FILE_IGNORE_NEW_LINES = 0x2;
// var a = false;
// var flags = FILE_IGNORE_NEW_LINES;
// fs.readFile(__dirname + '/' + 'test.txt', 'utf8', function (err, data) {

//     if (!err) {
//         a = data.replace(/\r\n?/g, '\n');
//         a = a.split('\n');
//         console.log(a);

//         a.neol = a.length - 1;

//         console.log(a);

//         if ((a.length > 0) && (a[a.length - 1] === '')) {
//             a.splice(a.length - 1, 1);
//         }


//         if ((flags & FILE_IGNORE_NEW_LINES) === 0) {

//             for (var i = 0; i < a.neol; ++i) {
//                 a[i] += '\n';
//             }
//         }
//         delete a.neol;
//     }
//     a.forEach(function (element) {
//         console.log('log: ' + element);

//     }, this);



// });



/**
 * 0x 16进制
 */

var buffer = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);

console.log(buffer.toString());
//unicode通用字符集
//charCodeAt() return unicode值
//在Unicode中，我们有很多方式将数字23383表示成程序中的数据，包括：UTF-8、UTF-16、UTF-32。UTF是“UCS Transformation Format”的缩写，可以翻译成Unicode字符集转换格式，即怎样将Unicode定义的数字转换成程序数据

console.log('h'.charCodeAt(0));



console.log(new Buffer('hello', 'utf8'));
console.log(new Buffer('hello', 'utf16le'));
console.log(new Buffer('hello', 'base64'));
console.log(new Buffer('hello', 'binary'));








//Buffer与字符串有一个重要区别。字符串是只读的，并且对字符串的任何修改得到的都是一个新字符串，原字符串保持不变。

//至于Buffer，更像是可以做指针操作的C语言数组。例如，可以用[index]方式直接修改某个位置的字节。

var buffer = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
console.log(buffer)
var sub = buffer.slice(2);
sub[0] = 0x65;
console.log(buffer);






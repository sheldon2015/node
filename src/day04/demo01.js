var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream(__dirname + '/input.txt');

// 设置编码为 utf8。如果在这里不设置编码，则下面的chunck为buffer对象

readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function (chunk) {

    console.log('-----------------')
    console.log('chunk:    ' + chunk+'                  chunk')
    console.log('----------------')

    data += chunk;
});

readerStream.on('end', function () {
    console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");
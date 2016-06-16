//管单的概念
var fs = require('fs');
var readStream = fs.createReadStream(__dirname + '/input.txt');
readStream.pipe(fs.createWriteStream(__dirname + '/output.txt'));
console.log("程序执行完毕");

//链式操作流

var zip = require('zlib')

readStream.pipe(zip.createGzip())
    .pipe(fs.createWriteStream(__dirname + '/output.txt.gz'));

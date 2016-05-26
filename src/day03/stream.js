// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function (req, res) {
//     fs.readFile(__dirname + '/stream.js', function (err, data) {
//         res.end(data);
//     });
// });
// server.listen(8888);


// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function (req, res) {
//     var stream = fs.createReadStream(__dirname + '/stream.js');
//     stream.pipe(res);
// });
// server.listen(8888);


var fs = require('fs'),
    path = require('path'),
    out = process.stdout;

var filePath = 'H:/study/node/了不起的Node  js  将JavaScript进行到底  PDF电子书下载 带书签目录 完整版.pdf';

var readStream = fs.createReadStream(filePath);
var writeStream = fs.createWriteStream('file.mkv');

var stat = fs.statSync(filePath);

var totalSize = stat.size;
var passedLength = 0;
var lastSize = 0;
var startTime = Date.now();

readStream.on('data', function (chunk) {

    passedLength += chunk.length;

    if (writeStream.write(chunk) === false) {
        readStream.pause();
    }
});

readStream.on('end', function () {
    writeStream.end();
});

writeStream.on('drain', function () {
    readStream.resume();
});

setTimeout(function show() {
    var percent = Math.ceil((passedLength / totalSize) * 100);
    var size = Math.ceil(passedLength / 1000000);
    var diff = size - lastSize;
    lastSize = size;
    // out.clearLine();
    // out.cursorTo(0);
    out.write('已完成' + size + 'MB, ' + percent + '%, 速度：' + diff * 2 + 'MB/s');
    if (passedLength < totalSize) {
        setTimeout(show, 10);
    } else {
        var endTime = Date.now();
        console.log();
        console.log('共用时：' + (endTime - startTime) / 1000 + '秒。');
    }
}, 10);
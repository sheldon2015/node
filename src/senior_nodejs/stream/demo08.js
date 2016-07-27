var fs = require('fs');
var http = require('http');
var server = http.createServer();
server.on('request', function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    if (req.url == '/favicon.ico') {
        return false;
    }

    var read = fs.createReadStream(__dirname + '/example.txt');
    read.setEncoding('utf8');

    var result
    i = 0;


    read.on('readable', () => {
        console.log('---------------readable:\n', i++);

        var chunk;

        while (chunk = read.read()) {

            console.log('得到了 %d 字节的数据', chunk.length);
            res.write(chunk)
        }
    })


    read.on('end', () => {
        res.end('\n----------------------------------------end ');
    })



}).listen(3000);
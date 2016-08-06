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

    res.setTimeout(20000, () => {
        console.log('---------------------------------超时2----------------------');

    });

    res.on('timeout', (socket) => {

        console.log('---------------------------------超时1----------------------');
        res.end('server response    timeout')

    });
    var read = fs.createReadStream(__dirname + '/example.txt');
    // read.setEncoding('utf8');
    var result
    i = 0;


    //End the writer when the reader ends. Default = true
    //当读取流结束的时候，结束写入流
    // read.pipe(res, { end: false });



    // read.on('data', (chunk) => {
    //     // console.log('----', chunk)
    //     res.write(chunk);
    //     console.log(read.read());//null
    // })

    read.on('readable', () => {
        console.log('---------------readable:\n', i++);
        // var s = read.read(1024 * 64);//64kb  当读取不到值时，返回null，触发read  end事件
        var s = read.read();
        !s || console.log(s.length);
        if (s) {
            res.write(s)
        }
    })

    read.on('end', () => {
        console.log('read end')
        res.end('--------------end')
    })

    res.on('close', () => {
        console.log('write close');

    })
    // 内部缓冲区被排空后
    res.on('drain', () => {
        console.log('write drain');

    })
    res.on('finish', () => {
        console.log('write finish');

    })

}).listen(3000);
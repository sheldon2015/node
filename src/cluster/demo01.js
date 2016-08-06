var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // Fork启一个Worker 进程
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('listening', function (worker, address) {
        console.log('worker ' + worker.process.pid + ', listen: ' + address.address + ":" + address.port);
    });

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + 'died');
        //重启一个worker进程
        cluster.fork();
    });
} else {
    // Worker 进程之间可以共享任何形式的TCP连接
    // 在本例中是共享一个 HTTP 服务
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(8000);
    // 也可以启动一个express的web服务
    // var app = require('../app');
    // http.createServer(app);
}
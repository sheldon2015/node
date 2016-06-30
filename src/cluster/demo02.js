var cluster = require('cluster');

if (cluster.isMaster) {

    var worker = cluster.fork();


    //获得子进程的句柄，在主进程中向子进程发送消息
    worker.send('from master: hi there');

    worker.on('message', function (msg) {
        console.log(msg);
    });

    cluster.on('online', function (worker) {
        console.log('worker ' + worker.process.pid);
        console.log('process ' + process.pid);

    });

    cluster.on('disconnect', function (worker) {
        console.log('工作进程 #' + worker.id + ' 断开了连接');
        cluster.fork();
    });

} else {
    //在子进程中，获得主进程发送的消息

    process.on('message', function (msg) {
        console.log(msg);
        process.send('from worker: hi there');
    });

}






var child_process = require('child_process');

var child = child_process.fork('child.js');
child.on('message', function (m) {
    console.log('收到了子进程的消息:', m);
});

//在父进程向子进程发送消息
child.send({ hello: 'world' });
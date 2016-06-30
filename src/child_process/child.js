process.on('message', function(m) {
  console.log('子进程收到了消息:', m);
});

//在子进程向父进程发送消息
process.send({ foo: 'bar' });

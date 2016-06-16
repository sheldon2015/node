
const child_process = require('child_process');
const p = child_process.spawn(
    'node', ['child.2.js', 'a', 'b'],
    {
        'stdio': 'ignore', // 父子进程间不建立通道
        'detached': true   // 让子进程能在父进程退出后继续运行
    }
);
// 默认情况，父进程会等子进程，这个方法可以让子进程完全独立运行
p.unref();

console.log('child pid:', p.pid);
console.log('parent pid:', process.pid);

p.on('exit', code => {
    console.log('exit:', code);
});


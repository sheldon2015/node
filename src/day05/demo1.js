// parent.js
const child_process = require('child_process');
const p = child_process.exec(
    'gulp -v', // 执行的命令会创建一个shell，然后在shell执行（windows中会生成cmd.exe进程）
    {
        shell: 'powershell.exe'
    },
    (err, stdout, stderr) => {
        if (err) {
            //子进程结束，调用这个回调函数
            // err.code 是进程退出时的 exit code，非 0 都被认为错误
            // err.signal 是结束进程时发送给它的信号值
            console.log('err:', err, err.code, err.signal);


        }
        console.log('stdout:', stdout);
        console.log(stdout);
        console.log('stderr:', stderr);
    }
    )
    ;
console.log('child pid:', p.pid);
console.log('parent pid:', process.pid);
// console.log('parent env:', process.env);
// cons
//
;

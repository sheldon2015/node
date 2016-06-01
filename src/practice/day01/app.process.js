//

console.log(process.cwd());



//

try {
    process.chdir('/day01');
    console.log(process.cwd());

} catch (error) {
    console.log(error);

}
//
console.log(process.stdout.write('1111111111111' + '\n'));

//


console.log(process.stderr.write('222222222' + '\n'));


//


process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`data: ${chunk}`);
    }

})


process.stdin.on('end', () => {
    process.stdout.write('end');
})

//



process.on('exit', function () {
    console.log('退出进程');
})
process.exit()



process.argv


//


console.log('process.env:' + process.env);
//
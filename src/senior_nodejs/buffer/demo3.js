/**
 * slowbuffer
 *
 *
 *   源码解析
     在新版本中，由于源代码更改，
     这个测试的结果已经不成立了


 * Buffer真正值的一提的是它的内部实现。Buffer在node.js内部的cpp代码对应的是SlowBuffer类（src/node_buffer.cc)，但是两者之间并不是一一对应。对 * 于创建小于8K的Buffer，其实是从一个pool里slice出来，只有大于8K的Buffer才是每次都new一个SlowBuffer *
 */


/*
//

 Buffer.poolSize = 8 * 1024;
 if (this.length > Buffer.poolSize) {
 // Big buffer, just alloc one.
 this.parent = new SlowBuffer(this.length);
 this.offset = 0;

 } else {
 // Small buffer.
 if (!pool || pool.length - pool.used < this.length) allocPool();
 this.parent = pool;
 this.offset = pool.used;
 pool.used += this.length;
 }

 */


var SlowBuffer = require('buffer').SlowBuffer;
var buff = new SlowBuffer(1024);
console.log(Buffer.poolSize);

function benchmark(size, repeats) {
    var total = 0;
    //console的用法
    console.log("create %d size buffer for %d times", size, repeats);

    console.time("times");
    for (var i = 0; i < repeats; i++) {
        total += new Buffer(size).length;
    }
    console.timeEnd("times");
}

var repeats = 10000000;

console.log("warm up----------------------");
benchmark(1024, repeats);

console.log("start benchmark");
benchmark(16 * 1024, repeats);
benchmark(4096, repeats);
benchmark(4097, repeats);










var Read = require('stream').Readable;
var Write = require('stream').Writable;




var r = new Read();
var w = new Write();


var i = 0;
r._read = function (size) {
    console.log('----------------------------------', i++);
    r.push('hello');
    r.push('world!');
    r.push(null);//结束标志


}


w._write = function (chunk, ev, cb) {
    console.log(chunk.toString());
    cb();//回到函数
}

r.pipe(w);
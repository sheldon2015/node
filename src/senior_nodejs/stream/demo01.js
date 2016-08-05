var fs = require('fs');


var writer = fs.createWriteStream('example.txt');
writer.write('itbilu.com');
//写入数据时，可以设置编码格式
writer.write('aXRiaWx1LmNvbQ==', 'base64');


//写缓冲区Buffer数据
var buf = new Buffer('itbilu.com');
writer.write(buf);
writer.end('finish');


//写入流   1.drain事件 2. finish事件
writer.on('drain', () => {
    console.log('drain');

})
writer.on('finish', () => {
    console.log('finish');

})
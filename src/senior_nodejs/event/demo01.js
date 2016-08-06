var http = require('http');


//创建一个HTTP服务器
var server = http.createServer();
//监听request事件
server.on('request', function (req, res) {
    //对request事件的处理
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!')
});
server.listen(3000)


// --------------------------------------------------------------


//自定义事件
var util = require('util');

//两种写法都可以
// var EventEmitter = require('events').EventEmitter;
var EventEmitter = require('events');

function MyClass(name) {
    this.name = name;

}

util.inherits(MyClass, EventEmitter);
var myClass = new MyClass('aa');



myClass.on('self', function (arg1, arg2, arg3) {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    console.log(myClass.__proto__);
    console.log(MyClass.prototype);

    console.log(myClass.constructor);
    console.log(MyClass.prototype.constructor);

})
myClass.on('self', function () {

})
myClass.on('self', function () {

})
myClass.on('self', function () {

})
myClass.on('self', function () {

})
myClass.on('self', function () {

})
myClass.on('self', function () {

})
myClass.on('self', function () {

})
myClass.on('self', function () {

})
myClass.on('self', function () {

})
myClass.on('self', function () {

})

myClass.emit('self', '1', '2');




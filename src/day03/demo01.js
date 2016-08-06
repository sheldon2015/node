var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on('demo', function () {
    console.log('demo event  emit')
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])

});
setTimeout(function () {
    event.emit('demo', 'arg1', 'arg2', 'arg3')

}, 1000)

event.on('error', function () {
    console.log('error   ocurr')
})

//处罚error事件
event.emit('error')


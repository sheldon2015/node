var EventEmitter = require('events').EventEmitter,

    util = require('util');

var Server = function () { };


util.inherits(Server, EventEmitter);

Server.prototype.outputThis = function (output) {
    console.log(this);
    console.log(output);
};


Server.prototype.emitOutput = function (input) {
    this.emit('output', input);
};

Server.prototype.callEmitOutput = function () {
    this.emitOutput('innerEmitOutput');
};

var s = new Server();

s.on('output', s.outputThis);


s.emitOutput('outerEmitOutput');


s.callEmitOutput();


s.emit('output', 'Direct');

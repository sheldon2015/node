var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('beep big bang');
rs.push('boop\n');
rs.push(null);

rs.pipe(process.stdout);






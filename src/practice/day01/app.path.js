var path = require('path');
var data = path.normalize('/path///normalize/hi/..');
console.log('normalize: ' + data);
//

var data = path.join('//aaa', '//bbb', '//cccc');
console.log('join: ' + data);

//
var data = path.dirname('/path///normalize/hi/..');
console.log('dirname: ' + data);
//
var data = path.basename('/path///normalize/hi');
console.log('basename: ' + data);

var data = path.extname('hi.html');
console.log('extname: ' + data);
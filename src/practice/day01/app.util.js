var util = require('util');
var result = util.inspect({ name: 'ywz', age: 11111, location: 'yinshan' });
console.log(result);
//
var result = util.format('%s:%s', 'foo', 'bar', 'baz');
console.log(result);
//
var result = util.isArray([{name:'ywz'},{age:11111}]);
console.log(result);
//
var result = util.isDate(new   Date());
console.log('isDate: '+result);

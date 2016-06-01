var query = require('querystring');
var data = query.stringify({ name: 'ywz', age: 11111 });

//默认的分割符（"&"）和分配符（"="）
console.log(data);//name=ywz&age=11111
//

var data = query.parse('foo=bar&cool=xux&cool=yys');
console.log(data);


/**
 * querystring  提供api对json String  和json   object的操作，他扩展了Json的stringify和parse方法
 *
 */
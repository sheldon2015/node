var url = require('url');
var flag = true;
var obj = url.parse('http://www.baidu.com/index/login/some?name=aaaaa', flag);
/*
 当flag=true,  obj中query是一个对象，false时则为字符串

 Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?name=aaaaa',
  query: { name: 'aaaaa' },
  pathname: '/index/login/some',
  path: '/index/login/some?name=aaaaa',
  href: 'http://www.baidu.com/index/login/some?name=aaaaa'
 }

 */

console.log(obj);




/**
 * format 将对象转为url
 */


/**
 * resolve 解析路径
 */


var r;
r = url.resolve('http://example.com/some/index', '/one')  // 'http://example.com/one'
console.log('r1: ' + r);

r = url.resolve('http://example.com/one', '/two') // 'http://example.com/two'
console.log('r2: ' + r);

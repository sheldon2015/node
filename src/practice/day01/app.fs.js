var fs = require('fs');
var inputData = `我是中国人`;

//异步写入数据
fs.writeFile('src/demo01.txt', inputData, (err) => {
    if (err) {
        throw err;
    }
    console.log('写入数据成功');

})



//同步写入数据
fs.writeFileSync('src/demo02.txt', inputData);




//追加文件内容，不存在文件，则会创建



fs.appendFile('src/demo01', inputData, (err) => {

    if (err) {
        throw err;
    }
    console.log('append   successs    ');


})


/**
 * 判断文件是否存在
 *
 */
fs.exists('src/demo01.txt', (exists) => {

    console.log(exists ? '存在' : '不存在');

})


/**
 * 修改文件名
 */


fs.rename('src/demo02.txt', 'src/demoModifyed.txt', (err) => {

    if (err) {
        console.log(err);
    }
    console.log('修改成功');


})


/**
 * 移动文件，可以通过rename函数
 *
 */


fs.rename('src/demo02.txt', 'demoModifyed.txt', (err) => {

    if (err) {
        console.log(err);
    }
    console.log('移动成功');


})


/**
 * 读取文件
 */
fs.readFile('src/demo01', (err, data) => {

    if (err) {
        throw err;
    }
    console.log("read:" + data);


})




//删除文件


fs.unlink('src/demo01', (err) => {
    if (err) {
        throw err;
    }
    console.log("delete  success");



})

/**
 * 操作文件夹
 */


//创建
fs.mkdir('dist', (err) => {
    if (err) {
        throw err;
    }
    console.log("创建文件夹成功");


})

//删除
fs.rmdir('dist', (err) => {
    if (err) {
        throw err;
    }
    console.log("删除文件夹成功");


})
//读取
fs.readdir('src', (err, files) => {

    if (err) {
        throw err;
    }
    console.log(files.length);



})



var http = require('http');











console.log('end')
angular




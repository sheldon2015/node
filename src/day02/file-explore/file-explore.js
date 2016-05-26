var fs = require('fs');



// fs.readFile(__filename, 'utf8', (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(/data/.test(data));
//     // console.log(data);
// })
// fs.open('H:/develop envirment/web前端岗位说明.doc', 'r+', (error, fd) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log(fd);

// })
// console.log(__dirname);
// fs.open(__dirname + "/test.txt", "w", () => { });



// fs.stat(__dirname + '/test.txt', (err, stats) => {
//     if (err) {
//         return console.log(err);
//     }
//     for (var key in stats) {
//         if (stats.hasOwnProperty(key)) {
//             console.log(key + ': ' + stats[key]);

//         }
//     }



// })

/**
 * parentdir目录和dir目录
 */

var fs = require('fs');
fs.realpath(__dirname + '/' + '..', function (err, resolvedPath) {

    var parentdir = resolvedPath;

    console.log(__dirname);
    console.log('The parent directory of this file is ' + parentdir + '.');

});
























//------------------------------------------------------------------------------------

//__dirname 当前工作目录
// fs.readdir(__dirname, (error, files) => {
//     console.log('  \033[31m   files  \033[39m   \n ');

// })

// var files = fs.readdirSync(__dirname);
// console.log(files);

// console.log(process.cwd());
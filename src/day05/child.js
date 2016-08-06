// child.js

let i = 1;
while (true) {
    console.log('child argv: ', 'child.js');//标准输出流
    i++;
    if (i === 10) {
        break;
    }
}
// setInterval(() => {
//     console.log('child');
// }, 1);
const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8").toString();

const str = fileContent.trim();

const tests = [
    '/../',                 // /
    '/home//foo',           // /home/foo 
    '/home/',               // /home
    '/home//foo/../zoo',    // /home/zoo
    '/home/./foo/../...',   // /home/...
    '././..',               // /
    '',                     // /
    'home',                 // /home
    '../home'               // /home
]

function solution(str) {
    // let path = ['/'];
    str = str.replace(/\/\/+/g, '/');
    // if (str[0] == '/') str = str.slice(1);
    if (str[0] === '/') str = str.slice(1);
    if (str[str.length - 1] === '/') str = str.slice(0, -1);

    const arr = str.split('/');
    console.log('arr = ', arr);
    let path = arr.reduce((acc, item) => {
        if (item === '.') return acc;
        if (item === '..') return acc.slice(0, acc.lastIndexOf('/'));
        return acc + '/' + item;
    }, '')
    console.log('path = ', path);
    if (path.length === 0) path = '/';
    return path;
}

// console.log(tests.map(test => solution(test)));

fs.writeFileSync("output.txt", solution(str).toString())

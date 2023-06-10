const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8").toString();

const n = Number(fileContent.split('\n')[0]);
const arr = fileContent.split('\n')[1].split(' ').map(s => Number(s));

console.log('n = ', n);
console.log('arr = ', arr);

function solution(n, arr) {
    if (n == 1) return '0 0';

}

// console.log(solution())

// fs.writeFileSync("output.txt", solution(n, arr).toString())

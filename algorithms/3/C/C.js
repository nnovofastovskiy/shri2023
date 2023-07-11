const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8").toString().trim().split('\n');

const n = parseInt(fileContent[0].split(' ')[0]);
fileContent.shift();
const arr = fileContent.map(item => parseInt(item));

console.log(n);
// console.log(k);
console.log(arr);

function solution(n, arr) {
    const map = arr
        .map((item, i) => [i, item])
        .sort((a, b) => b[1] - a[1]);
    let min = map[0][1];
    console.log(map);
    for (let i = 1; i < n; i++) {
        if (map[i][1] < min) min = map[i][1];
    }
    const res = [min, ...map.slice(0, n).map(item => item[0] + 1)];

    // console.log(res);
    return res;
}


fs.writeFileSync("output.txt", solution(n, arr).join('\n'));
const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");

const k = parseInt(fileContent.toString().split('\n')[0].split(' ')[1]);
const arr = fileContent.toString().split('\n')[1].split(' ').map(item => parseInt(item));

// console.log('k = ', k);
// console.log('arr = ', arr);

function solution(k, arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            const diff = i - (map.get(arr[i]) | 0);
            if (diff <= k) return 'YES'
        }
        map.set(arr[i], i);
    }
    return 'NO'
}

fs.writeFileSync("output.txt", solution(k, arr).toString());

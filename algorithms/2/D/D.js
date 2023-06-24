const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");

const arr = fileContent.toString().trim().split('\n')[1].trim().split(' ').map(item => parseInt(item));

function solution(arr) {
    const map = new Map();
    const target = Math.floor(arr.length / 2);
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] + 1 >= target) return arr[i];
        map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
    }
    return -1;
}

fs.writeFileSync("output.txt", solution(arr).toString());

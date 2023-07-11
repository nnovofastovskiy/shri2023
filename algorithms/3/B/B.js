const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");

tests = [
    [3, [16, 16], 2],
    [2, [16, 16], 2],
    [3, [17, 16, 18], 2],
    [4, [1, 2, 3, 4], 0],
    [4, [5, 6, 7, 8], 0],
    [4, [9, 10, 11, 12], 0],
    [4, [13, 14, 14, 14], 0],
    [4, [15, 15, 15, 15], 12],
    [4, [15, 15, 15, 14], 6],
    [4, [16, 17, 17, 17], 9],
    [5, [120, 25, 30, 100, 105], 4],
    [2, [1, 1], 0],
]

const arr = fileContent.toString().trim().split('\n')[1].split(' ').map(n => parseInt(n));

function solution(arr) {
    // console.log(arr);
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], map.get(arr[i]) + 1 || 1);
    }
    const keys = Array.from(map.keys());
    let res = 0;
    for (let i = 0; i < keys.length; i++) {
        const x = keys[i];
        for (let j = 0; j < keys.length; j++) {
            if (keys[j] <= x / 2 + 7) { }
            else if (keys[j] > x) { }
            else {
                if (keys[i] === keys[j]) {
                    res += map.get(keys[i]) * (map.get(keys[i]) - 1);
                } else {
                    res += map.get(keys[i]) * map.get(keys[j]);
                }
            }
        }
    }
    return res;
}


fs.writeFileSync("output.txt", solution(arr).toString());

console.log(tests.map(test => solution(test[1])))
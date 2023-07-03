const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");


const arr = fileContent.toString().trim().split('\n')[1].split(' ').map(n => parseInt(n));

function solution(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        const x = arr[i];
        res += arr.filter((item, j) => {
            if (i == j) return false;
            else if (item <= x / 2 + 7) return false
            else if (item > x) return false
            else if (item > 100 && x < 100) return false
            return true
        }).length;
    }
    return res;
}
fs.writeFileSync("output.txt", solution(arr).toString());


tests = [
    [3, [15, 16, 16], 2],
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

console.log(tests.map(test => solution(test[1])))
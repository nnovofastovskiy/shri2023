const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const n = Number(fileContent.toString());

function solution(n) {
    if (n == 0) return 0;
    let cnt = 0;
    while (n - cnt > 0) {
        n -= ++cnt;
    }
    return cnt;
}

fs.writeFileSync("output.txt", solution(n).toString())

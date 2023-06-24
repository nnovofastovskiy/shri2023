const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");

const arr = fileContent.toString().trim().split('\n')[1].trim().split(' ').map(item => parseInt(item));

function solution(arr) {
    const nNum = arr.length;
    let maxChain = 0;
    const map = new Map();
    arr.forEach(n => {
        const item = map.has(n) ? map.get(n) + 1 : 1;
        map.set(n, item);
    });
    for (const item of map) {
        const key = item[0];
        const value = item[1];
        if (value > maxChain) {
            maxChain = value;
        }
        if (map.has(key - 1)) {
            const sum = value + map.get(key - 1);
            if (sum > maxChain) {
                maxChain = sum;
            }
        }
        if (map.has(key + 1)) {
            const sum = value + map.get(key + 1);
            if (sum > maxChain) {
                maxChain = sum;
            }
        }
        map.delete(key);
    }

    return nNum - maxChain;
}

fs.writeFileSync("output.txt", solution(arr).toString());

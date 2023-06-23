const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");

const str = fileContent.toString().trim();

function solution(str) {
    let res = 0;
    const map = new Map();
    for (let i = 0; i < str.length; i += 2) {
        if (map.has(str[i + 1])) {
            map.set(str[i + 1], map.get(str[i + 1]).add(str[i]))
        } else {
            const set = new Set();
            set.add(str[i]);
            map.set(str[i + 1], set)
        }
    }
    map.forEach(item => {
        if (item.size >= 3) res++;
    })
    return res
}

fs.writeFileSync("output.txt", solution(str).toString());

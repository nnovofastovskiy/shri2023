const fs = require('fs');
let str = fs.readFileSync("input.txt", "utf8").toString().trim();

function findMiddleIndex(str) {
    if (str.length % 2 == 1) return Math.floor(str.length / 2);
    else return -1;
}

function solution(str) {
    if (str.length == 1) return '';
    const middleIndex = findMiddleIndex(str);

    for (let i = 0; i < str.length; i++) {
        if (str[i] != 'a') {
            if (i != middleIndex) {
                return str.replace(/[b-z]/, 'a');
            }
        }
    }
    return str.slice(0, -1) + 'b';
}

fs.writeFileSync("output.txt", solution(str).toString());

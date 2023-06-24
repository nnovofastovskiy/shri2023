const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");

const alp = fileContent.toString().trim().split('\n')[0].trim().split(' ');
const words = fileContent.toString().trim().split('\n')[1].trim().split(' ');

function solution(alp, words) {
    alp.sort((a, b) => a.length - b.length);
    console.log(alp);
    console.log(words);
    let res = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length <= alp[0].length) {
            res += words[i] + ' ';
            continue;
        }
        for (let j = 0; j < alp.length; j++) {
            if (words[i].startsWith(alp[j])) {
                res += alp[j] + ' ';
                break;
            } else if (j === alp.length - 1) {
                res += words[i] + ' ';
            }
        }
    }

    return res;
}

console.log(solution(alp, words))

fs.writeFileSync("output.txt", solution(alp, words).toString());

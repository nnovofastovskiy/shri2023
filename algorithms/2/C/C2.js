const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");

const alp = fileContent.toString().trim().split('\n')[0].trim().split(' ');
const words = fileContent.toString().trim().split('\n')[1].trim().split(' ');

function solution(alp, words) {
    const dict = new Map(alp.map(item => [item, 1]));
    console.log(dict);
    alp.sort((a, b) => a.length - b.length);
    console.log(alp);
    console.log(words);
    let res = '';
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const checkLen = word.length > 100 ? 100 : word.length;
        for (let j = 0; j < checkLen; j++) {
            const part = word.slice(0, j);
            if (dict.has(part)) {
                res += part + ' ';
                break;
            } else if (j === checkLen - 1) {
                res += word + ' ';
            }
        }
    }

    return res.slice(0, res.length - 1);
}

console.log(solution(alp, words))

fs.writeFileSync("output.txt", solution(alp, words).toString());

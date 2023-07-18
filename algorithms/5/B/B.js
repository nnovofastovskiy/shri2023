const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");

const k = parseInt(fileContent.toString().split('\n')[0].trim().split(' ')[1]);
const str = fileContent.toString().split('\n')[1].trim();



function solution(k, str) {
    console.log(k);
    console.log(str);
    let l = 0;
    let r = 0;
    let max = 0;
    let map = new Map();
    while (r < str.length) {

    }
    return 0
}

fs.writeFileSync("output.txt", solution(k, str).toString());

// for (let i = 0; i < tests.length; i++) {
//     const [b, c] = solution(tests[i][0], tests[i][1]).split('\n');
//     console.log([b, c]);
//     console.log(b == tests[i][2] && c == tests[i][3])
// }

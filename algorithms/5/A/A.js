const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");

const num1 = fileContent.toString().split('\n')[0].trim();
const num2 = fileContent.toString().split('\n')[1].trim();

const tests = [
    ['1370', '7311', 1, 2],
    ['1121', '1341', 2, 0],
    ['4000', '4444', 1, 0],
    ['123', '123', 3, 0],
    ['1355', '5350', 2, 1],
    ['132', '321', 0, 3],
    ['123', '456', 0, 0],
    ['15522', '13355', 1, 2],
    ['15522', '12255', 1, 4],
    ['00123', '00222', 3, 0],
    ['12300', '00222', 0, 3],
]

function solution(num1, num2) {
    num1 = num1.split('');
    num2 = num2.split('');
    bulls = 0;
    cows = 0;
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] === num2[i]) {
            bulls++;
            num1[i] = false;
            num2[i] = true;
        }
    }
    for (let i = 0; i < num1.length; i++) {
        const index = num1.indexOf(num2[i]);
        if (index >= 0) {
            cows++;
            num1[index] = false;
        }
    }

    // console.log('bulls = ', bulls);
    // console.log('cows = ', cows);
    return bulls.toString() + '\n' + cows.toString()
}

fs.writeFileSync("output.txt", solution(num1, num2).toString());

// for (let i = 0; i < tests.length; i++) {
//     const [b, c] = solution(tests[i][0], tests[i][1]).split('\n');
//     console.log([b, c]);
//     console.log(b == tests[i][2] && c == tests[i][3])
// }

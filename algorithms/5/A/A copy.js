const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");

const num1 = fileContent.toString().trim().split('\n')[0];
const num2 = fileContent.toString().trim().split('\n')[1];

function solution(num1, num2) {
    console.log(num1);
    console.log(num2);
    const map = new Map();
    let bulls = 0;
    let cows = 0;
    let i = 0;
    while (!!num1) {
        const n1 = num1 % 10;
        num1 = Math.floor(num1 / 10);
        // const n2 = num2 % 10;
        // num2 = Math.floor(num2 / 10);
        map.set(n1, map.get(n1) ? map.get(n1).concat([i]) : [i]);
        // map2.set(n2, map2.get(n2) ? map2.get(n2).concat([i]) : [i]);
        i++;
    }
    i = 0;
    while (!!num2) {
        console.log(map);
        const n2 = num2 % 10;
        num2 = Math.floor(num2 / 10);
        if (map.get(n2)) {
            const iArr = map.get(n2);
            if (iArr.includes(i)) {
                bulls++;
                iArr[iArr.indexOf(i)] = -1;
            }
            else cows++;
        }
        i++;
    }
    console.log('bulls = ', bulls);
    console.log('cows = ', cows);
    return 0
}

fs.writeFileSync("output.txt", solution(num1, num2).toString());

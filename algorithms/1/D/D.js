const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8").toString();

const n = Number(fileContent.split('\n')[0]);
const arr = fileContent.split('\n')[1].split(' ')
    .map(s => parseInt(s.split(':')[0]) * 60 + parseInt(s.split(':')[1]))
    .sort((a, b) => a - b);


function solution(n, arr) {
    if (n === 1) return 0;
    console.log(n, arr);
    let min = arr[n - 1] - arr[0];
    if (min > 720) min = 1440 - min;
    for (let i = 0; i <= arr.length - 2; i++) {
        let currMin = arr[i + 1] - arr[i];
        console.log('currMIn = ', currMin);
        if (currMin > 720) currMin = 1440 - currMin;
        if (currMin < min) min = currMin;
    }
    return min;
}

console.log(solution(n, arr));

fs.writeFileSync("output.txt", solution(n, arr).toString());

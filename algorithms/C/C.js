const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8").toString();

const n = Number(fileContent.split('\n')[0]);
const arr = fileContent.split('\n')[1].split(' ').map(s => Number(s));

console.log('n = ', n);
console.log('arr = ', arr);

function solution(n, arr) {
    if (n == 1) return '0 0';
    let maxIndex = n - 1;
    let minIndex = n - 2;
    let max = arr[maxIndex];
    let diff = 0;
    for (let i = minIndex; i >= 0; i--) {
        console.log('max = ', max);
        console.log('arr[i] = ', arr[i]);
        if (arr[i] >= max) {
            max = arr[i];
            maxIndex = i;
        }
        else {
            const newDiff = max - arr[i];
            if (newDiff >= diff) {
                minIndex = i;
                diff = newDiff;
            }
        }
    }
    if (minIndex == maxIndex) return '0 0'
    return `${minIndex + 1} ${maxIndex + 1}`;
}

fs.writeFileSync("output.txt", solution(n, arr).toString())

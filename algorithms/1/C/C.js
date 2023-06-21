const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8").toString();

const n = Number(fileContent.split('\n')[0]);
const arr = fileContent.split('\n')[1].split(' ').map(s => Number(s));

const bank = 1000;

console.log('n = ', n);
console.log('arr = ', arr);

function solution(n, arr) {
    if (n == 1) return '0 0';
    let maxIndex = n - 1;
    let minIndex = n - 2;
    let max = arr[maxIndex];
    let diff = 0;

    let tempMax = arr[maxIndex];
    let tempMaxIndex = n - 1;
    // let map = {};
    for (let i = minIndex; i >= 0; i--) {
        console.log('max = ', max);
        console.log('tempMax = ', tempMax);
        console.log('arr[i] = ', arr[i]);
        if (arr[i] > tempMax && i > 0) {
            tempMax = arr[i];
            tempMaxIndex = i;
        }
        else {
            const newDiff = (bank / arr[i]) * tempMax - 1000;
            console.log('newDiff = ', newDiff);
            if (newDiff >= diff) {
                minIndex = i;
                maxIndex = tempMaxIndex;
                max = tempMax;
                diff = newDiff;
            }
        }
    }
    if (diff <= 1 || minIndex > maxIndex) return '0 0';
    return `${minIndex + 1} ${maxIndex + 1}`;
}

// console.log(solution(n, arr));

fs.writeFileSync("output.txt", solution(n, arr).toString())

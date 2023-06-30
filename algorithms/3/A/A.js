const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");

const fileContentArr = fileContent.toString().trim().split('\n');
const arr = fileContentArr[1].split(' ').map(item => parseInt(item));
const queries = fileContentArr.slice(3).map(q => q.split(' ').map(q => parseInt(q)));

function solution(arr, queries) {
    const res = [];
    const pref = [Number(arr[0] > 0)];
    for (let i = 1; i < arr.length; i++) {
        pref.push(pref[i - 1] + Number(arr[i] > 0));
    }
    for (let i = 0; i < queries.length; i++) {
        res.push(pref[queries[i][1] - 1] - (pref[queries[i][0] - 2] | 0));
    }
    return res
}

fs.writeFileSync("output.txt", solution(arr, queries).join('\n').toString());

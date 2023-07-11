const fs = require('fs');
let fileContent = fs.readFileSync("./input.txt", "utf8");

const fileContentArr = fileContent.toString().trim().split('\n');
const groups = fileContentArr[1].split(' ').map(item => parseInt(item));
const rooms = fileContentArr[3].split(' ').map(item => parseInt(item));

function solution(groups, rooms) {
    groups.sort((a, b) => a - b);
    rooms.sort((a, b) => a - b);
    let res = 0;
    let g = 0;
    let r = 0;
    while (g < groups.length && r < rooms.length) {
        if (groups[g] <= rooms[r]) {
            res++;
            g++;
            r++;
        }
        else r++;
    }
    return res
}

fs.writeFileSync("output.txt", solution(groups, rooms).toString());

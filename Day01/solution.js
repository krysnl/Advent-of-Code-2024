const fs = require("fs");
const path = require("path");

function getInput(dir, filename) {
    return fs.readFileSync(path.resolve(dir, filename), {
        encoding: "utf-8",
    });
}

const input = getInput(__dirname, "input.txt");

let list1 = [];
let list2 = [];

input.split("\n").map((item) => {
    const [item1, item2] = item.split(/\s+/);
    let flag = false;
    list1.some((item, index) => {
        if (item1 < item) {
            list1.splice(index, 0, item1);
            flag = true;
            return true;
        }
    });
    if (!flag) list1.push(item1);

    flag = false;

    list2.some((item, index) => {
        if (item2 < item) {
            list2.splice(index, 0, item2);
            flag = true;
            return true;
        }
    });
    if (!flag) list2.push(item2);
});

let result = 0;

list1.forEach((item, index) => {
    result += Math.abs(item - list2[index]);
});

console.log(result);

result = 0;

let prevItem = undefined;
let count = 0;
let index = 0;
list1.forEach((item) => {
    if (prevItem !== item) {
        count = 0;
        index = 0;
        prevItem = item;
    }
    let flag = false;
    for (; index < list2.length; index++) {
        if (item === list2[index]) {
            count++;
            flag = true;
        } else if (flag) {
            flag = false;
            break;
        }
    }
    result += item * count;
});

console.log(result);

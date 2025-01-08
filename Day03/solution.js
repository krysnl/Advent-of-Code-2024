const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const regex = /mul\((\d+),(\d+)\)/g;

    const result = matchRegex(data, regex);

    console.log(result);
});

const matchRegex = (data, regex) => {
    let result = 0;
    let match;
    while ((match = regex.exec(data)) !== null) {
        const x = parseInt(match[1], 10);
        const y = parseInt(match[2], 10);
        result += x * y;
    }
    return result;
};

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const mulRegex = /mul\((\d+),(\d+)\)/g;

    let result = 0;

    data.split("do()").forEach((doStr) => {
        const splitArr = doStr.split(`don't()`);
        result += matchRegex(splitArr[0], mulRegex);
    });

    console.log(result);
});

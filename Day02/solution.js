const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
    const lines = data.split("\n");

    let result = 0;

    const validCheck = (number, multiplier) =>
        [1, 2, 3].includes(number * multiplier);

    const iterater = (numbers) => {
        const multiplier = numbers[1] > numbers[0] ? 1 : -1;
        for (let i = 1; i < numbers.length; i++) {
            if (!validCheck(numbers[i] - numbers[i - 1], multiplier)) {
                return false;
            }
        }
        return true;
    };

    lines.forEach((line) => {
        const numbers = line.split(" ").map(Number);

        if (iterater(numbers)) {
            result += 1;
        }
    });

    console.log(result);

    result = 0;

    lines.forEach((line) => {
        const numbers = line.split(" ").map(Number);

        for (let i = 0; i < numbers.length; i++) {
            const numbers = line.split(" ").map(Number);
            numbers.splice(i, 1);
            if (iterater(numbers)) {
                result += 1;
                break;
            }
        }
    });
    console.log(result);
});

/*
    Refactor the last challenge and optimize the code
*/

const { gets, print } = require("./aux-functions");

let biggestValue = 0;


for (let i = 0; i < 5; i++) {
    const numbersSorted = gets();
    if (numbersSorted > biggestValue) {
        biggestValue = numbersSorted;
    }
}


print(biggestValue);
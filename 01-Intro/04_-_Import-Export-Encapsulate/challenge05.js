/*
    Sorting an array and output the biggest number using the aux-functions.js file
*/

const { gets, print } = require("./aux-functions");



const numbersSorted = [];


for (let i = 0; i < 5; i++) {
    const number = gets();
    numbersSorted.push(number);
}

let biggestValue = 0;
for (let i = 0; i < numbersSorted.length; i++) {
    const number = numbersSorted[i];
    if (number > biggestValue) {
        biggestValue = number;
    }
    
}

print(biggestValue);
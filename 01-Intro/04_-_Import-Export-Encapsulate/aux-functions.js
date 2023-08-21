/*
    Creating functions that will be exported and used by other programs 
*/

const entryNumbers = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const value = entryNumbers[i];
    i++
    return value;

}

function print(text) {
    console.log(text);
}

module.exports = { gets, print };
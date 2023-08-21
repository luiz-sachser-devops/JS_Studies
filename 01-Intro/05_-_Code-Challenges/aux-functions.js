/*
    Creating functions that will be exported and used by other programs 
*/

const entryNumbers = [2000, 250];
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
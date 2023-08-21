/*
Create a list with numbers and sort out which numbers are even.
*/

const listNumbers = [34, 64, 83, 72, 90, 8, 4, 25, 764, 2, 93];

for (let index = 0; index < listNumbers.length; index++) {
    let result = (listNumbers[index]) % 2;
    if (result === 0) {
        console.log(listNumbers[index]);
    }
    
}
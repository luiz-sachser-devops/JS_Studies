/*
    Create a program that receives N (numbers) and its values;
    Outup should print BIGGEST EVEN and the SMALLEST ODD number

    * Use auxiliary functions externally *
*/

const { gets, print} = require('./aux-functions');

const N = gets();
let valueEven = 0;
let valueOdd = 0;

for (let index = 0; index < N; index++) {
    const number = gets();
    if (number % 2 === 0) {     // Checks if the number is EVEN
        if (number > valueEven) {
            valueEven = number;
        }
    } else {
        if (valueOdd === 0) {
            valueOdd = number;
        } else if (number < valueOdd) {
          valueOdd = number;  
        }
    }
}


print('The biggest even number is: ' + valueEven);
print('The smallest odd number is: ' + valueOdd);
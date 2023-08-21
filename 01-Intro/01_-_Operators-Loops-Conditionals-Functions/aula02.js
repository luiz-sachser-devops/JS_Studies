let number = 10;

let evenNumber = (number % 2) === 0;    // Remainder operation to check if the number is even or odd. Returns True for even or False for odd

console.log(evenNumber);

number = 11;

evenNumber = (number % 2) === 0;

console.log(evenNumber);


// OBS: '==' ignores the type of variable - implicit conversion

evenNumber = (number % 2) == '0'; // using a string
console.log(evenNumber);

// ALWAYS TRY TO USE '==='



/*-------------------------------------------------------------------------------------------------------------
CONDITIONALS

if () {         Conditions in between () - if conditions are met then executes the code, otherwise skip it

}
---------------------------------------------------------------------------------------------------------------*/

const even = 3;
evenNumber = (even % 2) === 0;
console.log(evenNumber);

if (evenNumber) {
    console.log('Even Number');         // If evenNumber is TRUE
}
if (!evenNumber) {
    console.log('Odd Number');          // If evenNumber is FALSE
}

// OR

if (evenNumber) {
    console.log('Even Number');
} else {
    console.log('Odd Number');
}

// ELSE IF

const numero = 10;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('The number is invalid');         
} else if (numeroDivisivelPor5) {
    console.log('Yes');          
} else {
    console.log('No');
}


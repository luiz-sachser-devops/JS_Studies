/* 
    Types of data (primitive) -> immutable in memory addressing

        - Booleans -> TRUE or FALSE
        - Null
        - Undefined
        - Numbers
        - String
        - Symbol
        
- Objects
- Methods
*/

let x = 10;
x = 'text';  // JS is weakly typed language and variables change dinamically in runtime

console.log(x);

// simple object
let y = { number: 10 }  // number is an attribute with value 10 (key-value)
y.number = 20
console.log(y);
console.log(y.number);

console.log(10 == '10'); // DOES NOT CONSIDER TYPE 10 = 10 regardless of type
console.log(10 === '10'); // IT DOES CONSIDER TYPE 10 (number) != '10' (string)

console.log(10 != '10'); 
console.log(10 !== '10');
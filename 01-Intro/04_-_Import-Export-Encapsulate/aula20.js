/*
    Destructuring
*/

// Creating a simple object
const person = {
    name: 'Luiz'
};


// The following code is equivalent: 

const { name } = person;

const name = person.name;


// In the previous example we imported the methods gets and print from a different file

const functions = require('./aux-functions');

// or it could be done as follows

const { gets, print } = require('./aux-functions'); // Now we can use the functions gets and print


// Functions inside an object is called METHOD

const person = {      
    name: 'Luiz Sachser',
    age: 39,

 // Using `` instead of '' is prefered for string concatenation, specially in multiline 
 // and dynamic/complex sentences. 
    describe: function () {
        console.log(`My name is ${this.name} and my age is ${this.age}.`); 
    }
};

console.log(person);

person.name = 'Viviane';
person.age = 40;
console.log(person);
person.describe();
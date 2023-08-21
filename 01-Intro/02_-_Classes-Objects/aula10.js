const person = {      
    name: 'Luiz Sachser',
    age: 39,

    describe: function () {
        console.log(`My name is ${this.name} and my age is ${this.age}.`); 
    }
};

// Acessing the key-value dinamically
const atribute = 'age';     
console.log(person[atribute]);

// or directly through a string
console.log(person['name']);

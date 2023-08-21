// Using CONSTRUCTOR

class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.yearOfBirth = 2023 - age;  // Random atribute
    }

    describe() {
        console.log(`My name is ${this.name} and my age is ${this.age}.`);
    }
}

// Instances
const luiz = new Person('Luiz Sachser', 39);
const vivi = new Person('Viviane Matsuo', 39);


luiz.describe();
vivi.describe();

console.log(luiz);
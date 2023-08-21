// Function receiving objects

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

function comparePeople(p1, p2) {
    if (p1.age > p2.age) {
        console.log(`${p1.name} is older than ${p2.name}`);
    } else if (p1.age < p2.age) {
        console.log(`${p2.name} is older than ${p1.name}`);
    } else {
        console.log(`${p1.name} and ${p2.name} are the same age.`);
    }
}


// Instances
const luiz = new Person('Luiz Sachser', 38);
const vivi = new Person('Viviane Matsuo', 39);

//Call method
comparePeople(luiz, vivi);
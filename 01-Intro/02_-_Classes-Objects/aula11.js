// Classes and instances

class Person {
    name;
    age;

    describe() {
        console.log(`My name is ${this.name} and my age is ${this.age}.`);
    }
}

// Instances
const luiz = new Person();
luiz.name = 'Luiz Sachser';
luiz.age = 39;

const vivi = new Person();
vivi.name = 'Viviane Matsuo';
vivi.age = 39;

console.log(luiz);
console.log(vivi);

luiz.describe();
vivi.describe();



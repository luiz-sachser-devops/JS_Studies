/*  Create a class to represent a person. Attributes are Name, Weight and Height
    The instances (people) have to be able to clculate their BMI (BMI=weight/(height^2))
    Create an instance for John, 70Kg and 1,75cm, and calculate his BMI.
*/

class Person {
    name;
    weight;
    height;

    constructor (name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateBMI() {
        return (this.weight / (Math.pow(this.height, 2)));
    }

    classifyBMI() {
        const bmi = this.calculateBMI();
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi >= 18.5 && bmi <= 25)    {
            return "Normal Weight";
        } else if (bmi > 25 && bmi <= 30)   {
            return "Overweight";
        } else if (bmi > 30 && bmi <= 40)   {
            return "Obese";
        } else  {
            return "Morbidly obese";
        }
    }
}

const john = new Person('John', 70, 1.75);

console.log(john.calculateBMI());
console.log(john.classifyBMI());


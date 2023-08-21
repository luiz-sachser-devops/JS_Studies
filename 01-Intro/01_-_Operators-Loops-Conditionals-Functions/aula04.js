/*
Calculate BMI according to BMI = weight / (height * height)

Output:
Conditions:
- BMI < 18.5 - Underweight
- 18.5 <= BMI <= 25 - Normal Weight
- 25 < BMI <= 30 - Overweight
- 30 < BMI <= 40 - Obese
- BMI > 40 - Morbidly obese

*/

const weight = 93;
const height = 1.91;
const bmi = weight / (height * height);     // Can use Math.pow(var,2) library
console.log(bmi);

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 25)    {
    console.log("Normal Weight");
} else if (bmi > 25 && bmi <= 30)   {
    console.log("Overweight");
} else if (bmi > 30 && bmi <= 40)   {
    console.log("Obese");
} else  {
    console.log("Morbidly obese");
}

// Organizing functions

function calculateBMI(weight, height) {
    return weight / Math.pow(height, 2);
}

function classifyBMI(bmi) {
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

function main() {
    const weight = 93;
    const height = 1.91;
    const bmi = calculateBMI(weight, height);
    console.log(bmi.toPrecision(4));  // NOTE: toPrecision() converts number to string
    console.log(classifyBMI(bmi));
}

main();
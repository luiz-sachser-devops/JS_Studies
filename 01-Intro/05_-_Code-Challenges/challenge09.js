/*
    Create a program that receives the gross salary of an employee and calculates his/her tax 
    bracket considering the rate, as follows:
        - From $0.00 to $1100.00 -> 5%
        - From 1100.01 to $2500 -> 10%
        - Above $2500 -> 15%
    Print out the net salary with taxes discounted + $250 benefits
*/

const { gets, print } = require('./aux-functions');

const grossSalary = gets();
const benefits = gets();

function calculatePercentage(value, percentage) {
    return value * (percentage / 100)
}

function choosePercentage(salary) {
    
    if (salary > 0 && salary <= 1100) {
        return 5;
    } else if (salary > 1100 && salary <= 2500) {
        return 10;
    } else {
        return 15;
    }
}    

const netSalary = grossSalary - calculatePercentage(grossSalary, choosePercentage(grossSalary)) + benefits;
print(netSalary);



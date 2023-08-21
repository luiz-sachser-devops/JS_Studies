// FUNCTIONS

function sayMyName(name) {
    console.log('Your name is ' + name);    // PROCEDURE = Function with no return
}


sayMyName('Luiz');
sayMyName('Sachser');


function quadrado(valor)    {
    return valor*valor;
}

const quadradoDeDez = quadrado(10);    // One way to store the returned value of a function in a constant
console.log(quadradoDeDez);


console.log(quadrado(10) + quadrado(10));    // Another way to call a function with designated parameter


function incrementInterest(value, percentage) {
    const valueAddition = (percentage/100) * value;
    return value + valueAddition;
}

console.log(incrementInterest(100, 10));  // Initial value of 100 and interest of 10%

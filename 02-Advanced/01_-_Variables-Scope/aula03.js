// var var1 = 'Test';      // leaks scope due to hoisting

if (true) {
    var var1 = 10;
}

console.log(var1);      // it works because var leaks scope, otherwise the var1 variable would only work
                        // inside the if code block


if (true) {
    const var2 = 20;
    console.log(var2);      // This should work
}

// console.log(var2);  // This won't work becuase var2 is a const and inside a if block

// Reatributions

var x = 10;     // 'var' and 'let' can suffer value reatributions, whereas 'const' CANNOT
x = 11;
const y = 20;
// y = 25; This would give us an error


console.log(x);
console.log(y);

/*
    Naming variables (recommended): 
        - starts with lower case letters (or $)
        - starts with _ means it is going to be local and not going to be changed outside of scope
        - ALL CAPITAL letters for 'const'
        - Classes start with capital
        - camelCase for conpound words
*/
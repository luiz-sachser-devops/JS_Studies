// HOISTING

/*test();

function test() {
    console.log('test');
}
*/
// It does NOT MATTER the order of function declaration as JS will hoist the function declarations
// to the bginning of the file

test1();
test2();

var test1 = function() {
    console.log('test1');
}

function test2() {
    console.log('test2');
}

// Hoisting acts differently for a function and a variable declaration.
// Hoisting will declare var test1; -> NULL
// All declaration (not atribution) will be hoisted to the top (functions and variables)
/* Numbers
    Integers, Decimals
    +Infinity
    -Infinity
    NaN

    Double precision 64-bit binary formt IEEE 754
*/

const x = { nome: null };

console.log(JSON.stringify(x));

/* Strings - IMUTABLE (always creates a new instance instead of modifying the
    previous instance)
    "text" ->
    'text' -> Standard
    `text` -> useful to concatenate (literals template) with line breaks

*/

console.log("<div id=\"10\">test</div>"); // without escape \ it would give an error
console.log('<div id="10">test</div>'); // as convention we use ''

const id = 10;
console.log('<div id="' + id + '">test</div>');  // classic wy of concatenation
console.log(`<div id="${id}">test</div>`);  // RECOMMENDED using ``

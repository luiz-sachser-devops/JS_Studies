/*
    Arrays - List of elements
    Recap:
        - const student = "John"; -> a variable called student containing a string John
        - const student = {name: 'John'}; -> an object called student witha key-value
        - const students = ['John', 'Victor', 'Mary']; -> a list (array)
*/

// An array can hold numbers or strings, or be empty
const students = ['John', 'Victor', 'Mary'];    
console.log(students);  // Shows the whole array
console.log(students[0]); // Shows the first element of the list

students.push('Peter');

console.log(students);

students[3] = 'Sam';    // It replaces the element 3 for the new one
console.log(students);
students.pop();     // Excludes the LAST item of the list
console.log(students);
students.shift();
console.log(students);  // Excludes the FIRST item of the list
// Manipulating arrays and for loops

const marks = [];

marks.push(5);
marks.push(7);
marks.push(8);
marks.push(2);
marks.push(5);

let addition = 0;
console.log(marks.length);
console.log(marks);


for (let index = 0; index < marks.length; index++) {
    const mark = marks[index]
    addition = addition + mark;
}

const avgGrade = addition / marks.length;
console.log(avgGrade);

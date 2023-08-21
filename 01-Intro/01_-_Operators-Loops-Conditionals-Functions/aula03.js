/*
EXERCISE
Calculating the average mark given 3 exams with same weight
avgMark = (mark1 + mark2 + mark3) / 3

Classification:
- avgMark < 5 = FAIL
- 5 <= avgMark < 7 = EXAM
- avgMark >= 7 = PASS
*/

const mark1 = 7.6;
const mark2 = 7.5;
const mark3 = 5.9;
const avgMark = (mark1 + mark2 + mark3) / (3);
console.log(avgMark);

if (avgMark < 5) {
    console.log("The student failed this unit");
} else if (avgMark <= 5 && avgMark < 7) {
    console.log("The student has another chance to pass doing an Final Exam");
} else     {
    console.log("The student has passed this unit");
}
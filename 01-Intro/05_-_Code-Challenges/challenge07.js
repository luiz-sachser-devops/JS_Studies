/*
    Create a program that receives an average mark from a student
        - If the average < 5, print "FAILED"
        - If average >= 5 and < 7, print "EXAM"
        - If average >= 7, print "APPROVED"
    * Use import/export functions from an external file *
*/

const { gets, print} = require('./aux-functions');

const avgMark = gets();

if (avgMark < 5) {
    print('FAILED');
} else if (avgMark >= 5 && avgMark < 7) {
    print ('EXAM');
} else {
    print('APPROVED');
}    


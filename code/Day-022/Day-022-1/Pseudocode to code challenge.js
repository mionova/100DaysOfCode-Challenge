/*****************************************
100DaysOfCode-Challenge: Day 22
Challenge 22-1 - Translate pseudocode to functioning JavaScript code
******************************************/

//run this in the console 

/*
Requirements: 
- Given a list of students, calculate their GPA
- The grading scale used should be 1-4
- If any grade isn't a 1,2,3 or 4 print a message and stop the program
*/

function calculateGpa(num1, num2, mum3, num4) {
  let gradeTotal = 0;
  let grade = [num1, num2, mum3, num4];
  for (let i = 0; i < grade.length; i++) {
    if (grade[i] == 1 || grade[i] == 2 || grade[i] == 3 || grade[i] == 4) {
      gradeTotal += grade[i];
    } else {
      return 'Invalid grade';
    }
  }
  let gpa = gradeTotal / grade.length;
  return gpa;
}

// set reggieGrades to 4, 4, 3, 4
const reggieGrades = calculateGpa(4, 4, 3, 4);
console.log(reggieGrades);

// set daveGrades to 1, 2, 3, 2
const daveGrades = calculateGpa(1, 2, 3, 2);
console.log(daveGrades);


/* Pseudocode used 

function calculateGpa
  retrieve studentGrades
  set grades to studentGrades
  set gradeTotal to 0
  for each grade in grades
      if grade is not a 1, 2, 3, or 4
          print "invalid grade"
          print grade
          print "can't complete calculation"
          stop
      else add grade to grade_total
      endif
  endfor
  set gpa to gradeTotal / number of grades
  return gpa
endfunction

set reggieGrades to 4, 4, 3, 4
set reggieGpa to call calculateGpa with reggieGrades
print reggieGpa

*/
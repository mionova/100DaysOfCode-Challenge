//Count the characters in a name

//Prompt dialog to capture input from the user and store it in a variable

const firstName = prompt("What is your first name?")

// A second prompt dialog to capture input from the user and store it in a second variable

const lastName = prompt("What is your last name?")

//A variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"

thirdVarUpper = firstName.toUpperCase() + ' '+ lastName.toUpperCase();

//const thirdVariable = firstName.toUpperCase() + lastName.toUpperCase();
//console.log (thirdVariable);

//A fourth variable to store a number. The number should be the total number of characters in the third variable. 
const nameLength = thirdVarUpper.length; 

//An alert dialog box for the result
alert(`The string ${thirdVarUpper} is ${nameLength} characters long.`);











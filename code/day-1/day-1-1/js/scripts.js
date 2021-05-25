// Create a function that returns the larger of the two numbers.

function max(numberOne, numberTwo) {

if (numberOne > numberTwo) {

return `${numberOne} is larger`;

} else if (numberTwo > numberOne) {

return `${numberTwo} is larger`;

} else {

return "Both numbers are equal"

}

}

max(5, 6);
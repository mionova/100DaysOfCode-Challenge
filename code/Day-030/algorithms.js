/******************************
100DaysOfCode-Challenge: Day 30
Challenge - Various algorithms
*******************************/

/*
String Repeater With Optional Delimiter
*/

var stringRepeater = function (string, times, delimiter) {
  var repeatedString = string;

  if (delimiter === undefined) {
    delimiter = ' ';
  }

  for (var i = 1; i < times; i++) {
    repeatedString = repeatedString + delimiter + string;
  }

  return repeatedString;
}

console.log(stringRepeater("hi", 3, ",") === "hi,hi,hi");
// -> true
console.log(stringRepeater("hi", 3) === "hi hi hi");
// -> true



/*
Iterate Nested Array with For Loop
*/
var nestedArray = [
  ["H", "a", "p"],
  ["p", "y"],
  [" ", "S", "U"],
  ["m", "m"],
  ["e", "r"]
];

var stringJoiner = function (arr) {
  var string = "";
  // write your nested for loop below
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      string = string + arr[i][j];
    }
  }
  return string;
}

console.log(stringJoiner(nestedArray));
// -> Happy Summer



/*
Implement a Search And Destroy function that accepts two inputs, an array and a data value called the "target".Return a new array after removing ALL instances of "target" inside the array.
*/
var searchAndDestroy = function (arr, target) {
  var i;
  var arr;
  var target;

  for (i = 0; i < arr.length; i++) {
    var index = arr.indexOf(target);
    if (arr[i] === target) {
      arr = arr.slice(0, index).concat(arr.slice(index + 1));
    }
  }

  return arr;
}

var numbers = [1, 3, 5, 7, 5, 3, 1];
var without3 = searchAndDestroy(numbers, 3);
console.log(without3);
// -> [1, 5, 7, 5, 1]
console.log(numbers);
// -> [1, 3, 5, 7, 5, 3, 1]



/*
Calculate the factorial of a number
*/
var factorial = function (num) {
  // write your recursive function below
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5)) // should return 120
console.log(factorial(6)) // should return 720
console.log(factorial(9)) // should return 362880



/*
Higher Order Function: Range and Sum

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

Finally, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior.
*/
function range(start, end, step) {
  var arr = [];
  // Your code here
  if (step === undefined) {
    step = 1;
    for (var i = start; i <= end; i++)
      arr.push(i)
  } else if (step > 0) {
    for (var i = start; i <= end; i = i + step)
      arr.push(i);
  } else {
    for (var i = start; i >= end; i = i + step)
      arr.push(i);
  }
  return arr;
}

function sum(arr) {
  var sum = 0;
  // Your code here
  for (var i = 0; i <= arr.length; i++) {
    sum += i;
  }
  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
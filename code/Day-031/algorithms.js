/******************************
100DaysOfCode-Challenge: Day 31
Challenge - Various algorithms
*******************************/

/*
Higher Order Functions: Array Sort
*/

var words = ["dinosaur", "lemon", "peach", "apple", "orange", "cat"];

var ascendingWords = words.sort(function (a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
});

console.log(ascendingWords);
// -> [ 'apple', 'cat', 'dinosaur', 'lemon', 'orange', 'peach' ]


/*
Higher Order Functions: Array.every and Array.some

The two Array methods Array.every and Array.some test whether all elements or some elements in an array passes the test callback.

"every" will return true if all elements pass, otherwise it will return false.

"some" will return true as long as one element passes, otherwise it will return false.
*/
var every = function (array, test) {
  // Your implementation below
  for (var i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true; // true or false
}

var some = function (array, test) {
  // Your implementation below
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) {
      return true;
    }
    return false; // true or false
  }
}

var largerThan = function (target) {
  return function (number) {
    return number > target;
  }
}

console.log(every([10, 20, 30], largerThan(1)));
// → true
console.log(every([10, 20, 30], largerThan(10)));
// → false
console.log(some([10, 20, 30], largerThan(10)));
// → true
console.log(some([10, 20, 30], largerThan(30)));
// → false



/*
Passing By Reference: Cloning Array With Slice
*/
var numbers = [1, 3, 5, 7];

var editArray = function (arr) {
  var newArr = arr.slice();

  newArr[0] = 10;
  return newArr;
};

var editedNumbers = editArray(numbers);

console.log(editedNumbers);
// -> [10, 3, 5, 7]
console.log(numbers);
// -> [1, 3, 5, 7]



/*
Advanced Object: The This Variable
*/
var person = {
  name: 'David',
  age: 23,
};

person.greet = function () {
  // Implement your code below

  return "I am " + this.name + "," + " I am " + this.age + ".";
}

console.log(person.greet() === "I am David, I am 23.");



/*
Algorithms: Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space " " or a "#" character. The characters should form a chess board.

You can think of a "#" representing a black square, and a " " representing a white square.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, change the program so that it works for any size, outputting a grid of the given width and height.
*/
function createGrid(height, width) {

  var output = "";
  for (var i = 0; i < height; i++) {
    for (var a = 0; a < width; a++) {
      output += (a % 2) == (i % 2) ? " " : "#";
    }
    if (i < (height - 1)) {
      output += "\n";
    } else {
      output = output;
    }
  }
  return output;
}
console.log(createGrid(8, 8));

console.log(createGrid(3, 3) === " # \n# #\n # ");
console.log(createGrid(4, 3) === " # \n# #\n # \n# #");
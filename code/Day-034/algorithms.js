/******************************
100DaysOfCode-Challenge: Day 34
Challenge - Various algorithms
*******************************/

/*
Algorithms: Drop Till True
Implement a function that will remove elements of an array from index 0 as long as the given Test function returns false. 

___

As an example, if you are given an array of numbers 1, 2, 3, 4, 5, 1, and a test function

function (n) {
  return n > 3;
}
You should return the array 4, 5, 1.
*/

var dropTillTrue = function (arr, test) {

  for (var i = 0; i < arr.length;) {

    if (test(arr[i])) {
      break;
    } else arr.shift(i);
  }
  return arr;
};

var test = function (n) {
  return n > 3;
};

console.log(dropTillTrue([1, 2, 3, 4, 5, 1], test));
// -> [4, 5, 1]
console.log(dropTillTrue([4, 3, 2], test));
// -> [4, 3, 2]
console.log(dropTillTrue([1, 2, 3], test));
// -> []



/*
Algorithms: Additive Persistence
Write a function to find the additive persistence of a number.

___

Note: The persistence of a number is the number of times one must apply a given operation to an integer before reaching a fixed point at which the operation no longer alters the number.

The additive persistence of 2718 is 2: first we find that 2 + 7 + 1 + 8 = 18, and then that 1 + 8 = 9. Since 9 is just a single number, we stop here. We operated on the number 2718 two (2) times till we stopped. The additive persistence is therefore 2.

*/
var additivePersistence = function (num) {

  // Break up the numbers into an array
  var numbers = num.toString().split('');

  // Initial count
  var count = 0;

  // If num is a single number
  if (numbers.length <= 1) {
    return count;
  };

  // If num isn’t a single number
  do {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum = sum + Number(numbers[i]);
    }

    // Set numbers equal to the new array after splitting the sum
    numbers = sum.toString().split('');
    count = count + 1;
  } while (numbers.length > 1);

  return count;
};


console.log(additivePersistence(2718));
// -> 2
console.log(additivePersistence(1234));
// -> 2
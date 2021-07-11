/******************************
100DaysOfCode-Challenge: Day 38
Challenge - Various algorithms
*******************************/

/*
Algorithms: Flatten (remove) nested structures from data values such as Arrays and Objects.

___

A multi dimensional array such as
[1, [2], [3, [[4]]]]
can be flattened into a one dimensional area which will look like
[1, 2, 3, 4]
*/

vvar flatten = function (arr) {
  return arr.flat(Infinity);
};

var flatten = function (arr) {
  function flattener(collection) {
    return collection.reduce((acc, curr) => {
      return acc.concat(Array.isArray(curr) ? flattener(curr) : curr);
    }, []);
  }
  return flattener(arr);
};

console.log(flatten([1, [2],
  [3, [
    [4]
  ]]
]));
// -> [1, 2, 3, 4]
console.log(flatten(["a", ["b", "c"]]));
// -> ["a", "b", "c"]


/*
Algorithms: Permutations

The objective of this exercise is to calculate the number of unique permutations from a given string.

___

As an example, for the string "abc", the permutations are

abc
acb
bac
bca
cab
cba
There are 6 unique permutations.
*/


var permutations = function (string) {
  var permutate = function (string) {
    var permutationsArray = [];

    if (string.length == 1) return [string];

    // the string passed in has two characters, there are only two possibilities, "ab" and "ba":
    if (string.length == 2) return [string, string[1] + string[0]];

    // if the string passed in has more than 2 characters, we will use a forEach function

    // forEach well explained: https://www.youtube.com/watch?v=159EAISAxwg


    string.split('').forEach(function (item, index, array) {
      // create a clone of the original array, so we don't edit it
      var clonedString = [].concat(array);

      // take out the current character that we are working on
      clonedString.splice(index, 1);

      // pass the rest of the characters to permutate to generate all possible variations
      permutate(clonedString.join('')).forEach(function (perm) {
        // join the variate with the character held in place
        var combination = item + perm;
        // check the combination variate is unique
        if (permutationsArray.indexOf(combination) === -1) {
          // if unique, add to the returned array
          permutationsArray.push(combination);
        }
      });
    });
    return permutationsArray;
  }
  return permutate(string).length;
};



console.log(permutations("abc"));
// -> 6
console.log(permutations("abcdef"));
// -> 720
console.log(permutations("aaa"));
// -> 1
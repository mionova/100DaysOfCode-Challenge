/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

Math.floor(Math.random() * (6 - 1 + 1)) + 1;

// Call the function and pass it different values

const randomNumber = function (lower, upper = 20) {
  if (isNaN(lower) || isNaN(upper)) {
    throw Error('Both arguments must be numbers');
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(randomNumber(10, 90));
console.log(`${randomNumber(5)} is a random number between 5 and 20`);
console.log(randomNumber('one', 3));
/***********************************************************
100DaysOfCode-Challenge: Day 40
Challenge: What's the Deal with Functions -  Project Warm Up
************************************************************/

/*
Requrement:
Follow the instructions and create simple functions and program them with parameters and arguments.
*/

"use strict";


/* Variables to store buttons */
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');


/* Variable to store DOM elements */
const element1 = document.querySelectorAll('.item')[0];
const element2 = document.querySelectorAll('.item')[1];
const element3 = document.querySelectorAll('.item')[2];
const element4 = document.querySelectorAll('.item')[3];


// Helpful log statements
console.log(element1);
console.log(element2);
console.log(element3);
console.log(element4);


/* Variables to use as `arguments` when invoking functions */
const value1 = 42;
const value2 = 'JS Rocks!';
const value3 = btn3.tagName;
const value4 = [value1, value2, value3]


// 1. Create a function named `func1` — it should accept a single parameter called `number
// 1a. Set the `style.color` property of `element1` to green, or your favorite color
// 1b. Set the `innerHTML` property of `element1` equal to the `number` parameter
function func1(number) {
  element1.style.color = 'green';
  element1.innerHTML = `${number}`;
}


// 2. Create a function named `func2` - it should accept a single parameter called `string`
// 2a. Set the `style.color` property of `element2` to green, or your favorite color
// 2b. Set the `innerHTML` property of `element2` equal to the `string` parameter
function func2(string) {
  element2.style.color = 'green';
  element2.innerHTML = `${string}`;
}


// 3. Create a function named `func3` - it should accept a single parameter called `element`
// 3a. Set the `style.color` property of `element3` to green, or your favorite color
// 3b. Set the `innerHTML` property of `element3` equal to the `element` parameter
function func3(element) {
  element3.style.color = 'green';
  element3.innerHTML = `${element}`;
}


// 4. Create a function named `func4` - it should accept a single parameter called `array`
// 4a. Set the `style.color` property of `element4` to green, or your favorite color
// 4b. Create a variable `myString` and set it equal to an empty string, `''`
// 4c. Loop over the `array` parameter
// 4cc. For each loop iteration, concatenate `array[i]` to the `myString` variable you created above
// 4d. Set the `innerHTML` of `element4` equal to the `myString`
function func4(array) {
  element4.style.color = 'green';
  var myString = '';

  for (let i = 0; i < array.length; i++) {
    myString += ' ' + array[i];
  }

  element4.innerHTML = `${myString}`;
}


// 5. Call each function you've created in the associated event listeners below,
// `func1` in the first event listener, `func2` in the second, etc.
// Pass the `value` variables above as the arguments for each function, 
// `value1` to `func1`, `value2` to `func2`, etc.


/**
 * Event listeners for buttons - Invoke functions in the body of the callback of the respective listener
 */

/* btn1 listener */
btn1.addEventListener('click', () => {

  // Invoke `func1` here and pass in the `value1` argument
  func1(value1);

  // Helpful log statement to test function
  console.log('First button is functional!');
});


/* btn2 listener */
btn2.addEventListener('click', () => {

  // Invoke `func2` here and pass in the `value2` argument
  func2(value2);

  // Helpful log statement to test function
  console.log('Second button is functional!');
});


/* btn3 listener */
btn3.addEventListener('click', () => {

  // Invoke `func3` here and pass in the `value3` argument
  func3(value3);

  // Helpful log statement to test function
  console.log('Third button is functional!');
});


/* btn4 listener */
btn4.addEventListener('click', () => {

  // Invoke `func4` here and pass in the `value4` argument
  func4(value4);

  // Helpful log statement to test function
  console.log('Fourth button is functional!');
});
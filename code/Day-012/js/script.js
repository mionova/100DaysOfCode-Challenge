/**************************************************
100DaysOfCode-Challenge: Day 12
Challenge 12-1 - Dice roll game between two players
**************************************************/

"use strict";

/* Variable to store play button by id for event listener assignment below */
const playBtn = document.querySelector('#play-btn');

/* Variables to store DOM elements that display player's scores to use in the event listener below */
const scoreOneElement = document.querySelector('#score-1');
const scoreTwoElement = document.querySelector('#score-2');

//Array of numbers of Two-sided dice 
let twelveSidedDie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//create a random number and return the random number variable
function diceroll(array) {
  var randomNumber = Math.floor(Math.random() * array.length + 1);
  return randomNumber;
};

// helpful log statement to test function 
console.log(diceroll(twelveSidedDie));

/**
 * Event listeners for playBtn
 */
playBtn.addEventListener('click', () => {
  //two variables to store player1 and player2 scores
  let score1 = diceroll(twelveSidedDie);
  let score2 = diceroll(twelveSidedDie);

  // helpful log statement to test variables in the console
  console.log(score1);
  console.log(score2);

  // setting the innerHTML of the `scoreOneElement` and `scoreTwoElement` variables above equal to the dice roll variables
  document.getElementById("score-1").innerHTML = score1;
  document.getElementById("score-2").innerHTML = score2;

  // helpful log statement to test function 
  console.log('Play button is functional!');

  // Calling helper function from color-changer.js to set the color of the results(code provided)
  //updateColors(scoreOneElement, scoreTwoElement);
});
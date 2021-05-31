// TO DO: Use a loop to create a number guessing game while tracking the guess attempts

const main = document.querySelector('main');

//const randomNumber = 2;
const randomNumber = getRandomNumber(10);
let guess;
let attempts = 0;
let message;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

//  1) Ask the user to enter a number and assign that value to the `guess` variable
guess = prompt('Enter a number from 1 to 10');

//  2) End the loop when the user's guess matches the random number
do {
  guess = prompt('Guess a number from 1 to 10');
  attempts++;
  if (guess == randomNumber){
    message =`It took you ${attempts} attempts to guess the number ${randomNumber}`;
    break;
  } else {
    message =`You run out of attempts and you did not guess the number ${randomNumber}`;
  }
} while (attempts <10)

//  4) Display a message letting the user know they guessed the number

document.querySelector('main').innerHTML = `<h2>${message}</h2>`;

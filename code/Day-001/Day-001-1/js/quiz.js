//Quiz

/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
//Beginning score
let correct = 0;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

//Quesstion 1
let answerOne = prompt("How old is Salma Hayek?");

if (+answerOne === 52) {
  correct++;
}

//Quesstion 2
let answerTwo = prompt("How old is Jennifer Lopez?");

if (+answerTwo === 49) {
  correct++;
}

//Quesstion 3
let answerThree = prompt("How old is Halle Berry?");

if (+answerThree == 51) {
  correct++;
}

//Quesstion 4
let answerFour = prompt("How old is Anna Kendrick?");

if (+answerFour === 33) {
  correct++;
}

//Quesstion 5
let answerFive = prompt("How old is Sandra Bullock?");

if (+answerFive === 54) {
  correct++;
}

console.log(correct);

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correct === 5) {
  rank = "Gold";
} else if ((correct >= 3) && (correct <= 4)) {
  rank = "Silver";
} else if ((correct >= 1) && (correct <= 2)) {
  rank = "Bronze";
} else {
  rank = "No crown";
}


// 6. Output results to the <main> element
main.innerHTML = `You answered ${correct} out of 5 questions and your rank is ${rank}`
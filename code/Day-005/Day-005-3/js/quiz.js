//Build a Quiz by creating a multidimensional array to hold quiz questions and answers

// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [

  ['What is always coming, but never arrives?', 'tomorrow'],
  ['What is it that lives if it is fed, and dies if you give it a drink?', 'fire'],
  ['What goes up and down, but always remains in the same place?', 'stairs']

]

// 2. Store the number of questions answered correctly
let correctAnswer = 0;

//empty arrays to store correct and incorrect answers
const correctAnswerArray = [];
const incorrectAnswerArray = [];

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (let i = 0; i < quiz.length; i++) {
  let test = prompt(quiz[i][0]);
  if (test.toLowerCase() === (quiz[i][1])) {
    correctAnswer = correctAnswer + 1;
    correctAnswerArray.push(quiz[i][0]);
  } else
    incorrectAnswerArray.push(quiz[i][0]);
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}


// 4. Display the number of correct answers to the user

document.querySelector('main').innerHTML = `<h1>You answered ${correctAnswer} questions correctly</h1>
<h2>You got these questions right:</h2>
<ol>${createListItems(correctAnswerArray)}</ol>

<h2>You got these questions wrong:</h2>
<ol>${createListItems(incorrectAnswerArray)}</ol>
`;
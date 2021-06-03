//Convert the array of arrays from yesterday's challenge into an array of objects (so I can use property names to identify the data)
// 1. Create an array to hold quiz questions and answers
const questions = [
  { question: 'What is always coming, but never arrives?', answer: 'tomorrow' },
  { question: 'What is it that lives if it is fed, and dies if you give it a drink?', answer: 'fire' },
  { question: 'What goes up and down, but always remains in the same place?', answer: 'stairs' }
];

// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for ( let i = 0; i < questions.length; i++ ) {
  let question = questions[i].question;
  let answer = questions[i].question;
  let response = prompt(question);
  
  if ( response === answer ) {
    correctAnswers++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `
  <h1>You got ${correctAnswers} question(s) correct</h1>
  <h2>You got these questions right:</h2>
  <ol>${ createListItems(correct) }</ol>

  <h2>You got these questions wrong:</h2>
  <ol>${ createListItems(incorrect) }</ol>
`;

document.querySelector('main').innerHTML = html;
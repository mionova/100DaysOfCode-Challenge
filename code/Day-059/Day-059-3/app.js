/***************************************************
100DaysOfCode-Challenge: Day 59
Day 59-3 Clallbacks - Using callbacks on text inputs
****************************************************/

/*
//Alternate solution of the below
const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

nameInput.addEventListener('focus', event => {
  event.target.className = 'highlight';
});

nameInput.addEventListener('blur', event => {
  event.target.className = '';
});
*/

// solution where we move the evnethadles out of the functions and assing them to variables (avoiding repetion, according to DRY)
// one function to handle al the focus events and another function to handle all the blur events
const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusHandler = event => {
  event.target.className = 'highlight';
};

const blurHandler = event => {
  event.target.className = '';
};

nameInput.addEventListener('focus', focusHandler);
nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('focus', focusHandler);
messageTextArea.addEventListener('blur', blurHandler);
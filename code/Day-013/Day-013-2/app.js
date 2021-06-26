/************************************************************************
100DaysOfCode-Challenge: Day 13
Challenge 13-2 - Practice selecting DOM elements and listening for events
*************************************************************************/

//selecting of the heading
const myHeading = document.getElementById('myHeading');

//selecting of the button
const myButton = document.getElementById('myButton');

//selecting of the input field
const myTextInput = document.getElementById('myTextInput');

//running a function on button click 
myButton.addEventListener('click', () => {
    myHeading.style.color=myTextInput.value;
});
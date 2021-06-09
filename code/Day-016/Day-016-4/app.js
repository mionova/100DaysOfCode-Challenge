/****************************************************************
100DaysOfCode-Challenge: Day 16
Challenge 16-4 Create and append nodes to add elements to the DOM
*****************************************************************/

//run this into the console

//create a new element p and place it as the last child of the element stored in the div constant
const div = document.querySelector('div#feedback');
const p = document.createElement('p');
div.appendChild(p);
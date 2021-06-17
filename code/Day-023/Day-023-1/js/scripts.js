/*****************************************************
100DaysOfCode-Challenge: Day 23
Challenge 23-1 - Practice Manipulating the DOM
*****************************************************/

// 1: Set the text of the <h1> element
const h1 = document.querySelector('h1');
h1.textContent = 'This is a new heading';

// 2: Set the color of the <h1> to a different color
h1.style.color = 'red';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
document.querySelector('.desc').innerHTML = `
<p>I am using <strong>JavaScript</strong> to display this!</p>
`

// 4: Set the class of the <ul> to 'list'
const ul = document.querySelector('ul');
ul.className = 'list';

// 5: Create a new list item and add it to the <ul>
ul.innerHTML += '<li><input> Chat</li>'

// 6: Change all <input> elements from text fields to checkboxes
let input = document.querySelectorAll('input');
for (let i=0; i<input.length; i++) {
    input[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const extra = document.querySelector('div.extra');
extra.innerHTML += `<button id = "toggleList">Delete</button>`

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const toggleList = document.querySelector('#toggleList');
toggleList.addEventListener('click', () => {
   extra.style.display='none'; 
})

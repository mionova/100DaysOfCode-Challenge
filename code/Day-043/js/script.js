/******************************************
100DaysOfCode-Challenge: Day 43
Challenge - Simple Search - Project Warm Up
*******************************************/

"use strict";


/* Variables to reference the `input` and search `button` elements */
const search = document.querySelector('#search-input');
const submit = document.querySelector('#submit');


/* Variable to store HTMLCollection of table cells to search through */
const tableCells = document.querySelectorAll('td');

// Helpful log statements
console.log(search);
console.log(submit);
console.log(tableCells);


// 1. Creating a function to perform search - accepts two parameters: searchInput, names.  
// Looping over the `names` parameter
// Removing the 'match' class name from each `names[i]` 
// Creating a conditional that checks two conditions:
// If the `searchInput.value.length` does not equal the digit zero AND `names[i].textContent.toLowerCase()` includes `searchInput.value.toLowerCase())`
// Adding the class name 'match` to `names[i]` 


function performSearch(searchInput, names) {
  console.log(searchInput);
  console.log(names);
  var searchInput;

  for (let i = 0; i < names.length; i++) {
    names[i].classList.remove("match");

    let match = searchInput.value.toLowerCase();


    if (searchInput.value.length !== 0 && names[i].textContent.toLowerCase().includes(match)) {
      names[i].classList.add("match");
    }
  }
}

// 2. Calling the search function in the callbacks of the event listeners below

/**
 * Event listeners for buttons - Invoke your search function in the body of the callbacks in the event listeners below
 */

/* submit listener */
submit.addEventListener('click', (event) => {
  event.preventDefault();

  // Invoke search function here - Arguments: search, tableCells
  performSearch(search, tableCells);

  // Helpful log statement to test function
  console.log('Submit button is functional!');
});

/* submit listener */
search.addEventListener('keyup', () => {

  // Invoke search function here - Arguments: search, tableCells
  performSearch(search, tableCells);

  // Helpful log statement to test function
  console.log('Keyup event on the Search input is functional!');
});
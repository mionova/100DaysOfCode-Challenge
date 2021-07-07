
/**********************************************************
100DaysOfCode-Challenge: Day 40
Challenge 41-1 - List Section Selection - Project Warm Up
*********************************************************/

"use strict";


/* Variables to store buttons*/
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');


/* Variable to store NodeList of DOM elements
   This variable contains the list we will be choosing our selections from
   but this technique works just as well with an array of objects as it does
   with a list of DOM elements  */
const listItems = document.querySelectorAll('.item');

// Helpful log statement
console.log(listItems);


/* Variable to store the number of items to select at any given time */
const perPage = 2;


// 1. Create a function called `sectionSelection` - it should accept two parameters: list, section

  // 1a. Loop over the list parameter and set the style.color of each list[i] item to 'whitesmoke'

  // 1c. Loop over the list parameter again
      // If the `i` is >= the `startIndex` variable && the `i` < the `endIndex` variable
        // Set the style.color of the the list[i] item to 'green', or your favorite color

function sectionSelection (list, section) {
  const startIndex = (section * perPage) - perPage;
  const endIndex = (section * perPage);
  
  for (let i=0; i<list.length; i++){
    list[i].style.color = "whitesmoke";
  }
  
  for (let i=0; i<list.length; i++){
    if ((i >= startIndex) && (i < endIndex)) {
      list[i].style.color = "green";
    }
  }
}


  // 2. Invoke the `sectionSelection` function in the event listeners below
   // Be sure to pass in arguments: the `listItems` variable and the targeted section - 1, 2, or 3
   sectionSelection(listItems, 2);


/**
 * Event listeners for buttons - Invoke functions in the body of the callbacks in the event listeners below
 */

/* btn1 listener */
btn1.addEventListener('click', () => {

  // Invoke sectionSelection function here - Arguments: listItems, 1
  sectionSelection(listItems, 1);
  // Helpful log statement to test function
  console.log('First button is functional!');
});


/* btn2 listener */
btn2.addEventListener('click', () => {

  // Invoke sectionSelection function here - Arguments: listItems, 2
  sectionSelection(listItems, 2);

  // Helpful log statement to test function
  console.log('Second button is functional!');
});


/* btn3 listener */
btn3.addEventListener('click', () => {

  // Invoke sectionSelection function here - Arguments: listItems, 3

  sectionSelection(listItems, 3);
  // Helpful log statement to test function
  console.log('Third button is functional!');
});

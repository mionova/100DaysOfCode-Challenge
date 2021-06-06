/*******************************************************************************************************************************
100DaysOfCode-Challenge: Day 13
Challenge 13-1 - Build a string conditionally from the properties of a provided random object.Then print that string to the page. 
**********************************s*********************************************************************************************/

"use strict";


/* Variable to store print button by id */
const print = document.querySelector('#print');

/* Variable to store element to print the conditional string*/
const statString = document.querySelector('#stat-string');

/**
 * Event listeners for print button
 */
print.addEventListener('click', () => {

  // Variable to store the random character object
  const myChar = createRanCharObj();

  // Helpful log statement to inspect the character object in the console
  console.log(myChar);

  //Defining an empty string variable
  let myCharIcon ='';

  //String Concatenatinattion
  myCharIcon = '<p>My ' + myChar.icon + 'character has:</p>'
  
  // Helpful log statement to inspect the string value
  console.log(myCharIcon);

  //Simple `if` statements to conditionally concatenate strings for your characters stats.
  //The character will have three of five possible stats — 'experience', 'strength', 'wisdom', 'endurance', 'charisma'
  // The `if` statements will simply check if an object property exists — `if (object.property) {do something}
  // If the object.property exists, concatenate to the above string variable something like the following string and value
  // '<p>An experience level of ' + myChar.experience + '</p>'
  // Repeat this process for all five possible character states

  //`if` statements to check if the property 'experience' exists 
  if (myChar.experience !== undefined) {
    myCharIcon += `<p>An experience level of ${myChar.experience} </p>`
    console.log('5');
  }

  //`if` statements to check if the property 'strength' exists   
  if (myChar.strength !== undefined) {
    myCharIcon = myCharIcon + '<p>An experience level of ' + myChar.strength + '</p>'
  }

  //`if` statements to check if the property 'wisdom' exists 
  if (myChar.wisdom !== undefined) {
    myCharIcon = myCharIcon + '<p>An experience level of ' + myChar.wisdom + '</p>'
  }

  //`if` statements to check if the property 'endurance' exists 
  if (myChar.endurance !== undefined) {
    myCharIcon = myCharIcon + '<p>An experience level of ' + myChar.endurance + '</p>'
  }

  //`if` statements to check if the property 'charisma' exists 
  if (myChar.charisma !== undefined) {
    myCharIcon = myCharIcon + '<p>An experience level of ' + myChar.charisma + '</p>'
  }

  //Setting the innerHTML of the `statString` variable above equal to the conditional string variable
  statString.innerHTML = myCharIcon;

  // Helpful log statement to test function
  console.log('Print button is functional!');

  // Calling the helper function from the `js/object.js` file to print the objects stats and compare with the string
  printStats(myChar);
});
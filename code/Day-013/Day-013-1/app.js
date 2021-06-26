/*******************************************************************************
100DaysOfCode-Challenge: Day 13
Challenge 13-1 - Select an element with JavaScript and change its color on click
*******************************************************************************/


const myHeading = document.getElementById('myHeading');

myHeading.addEventListener('click', () => {
    myHeading.style.color = 'red';
})
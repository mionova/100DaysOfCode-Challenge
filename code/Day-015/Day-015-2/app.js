/*************************************************
100DaysOfCode-Challenge: Day 15
Challenge 15-2 - Practice textContent and innerHTML
**************************************************/

const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    p.textContent = input.value + ':';
});

//the following gives us exactly the same result:
button.addEventListener('click', () => {
    p.innerHTML = input.value + ':';
});
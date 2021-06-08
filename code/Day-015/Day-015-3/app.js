/*************************************************
100DaysOfCode-Challenge: Day 15
Challenge 15-3 - Set Element.attribute and Element.className through JS (it's possible but not recommended)
**************************************************/

const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    p.textContent = input.value + ':';
});

//Set the css [title] on an element
p.title = 'list description';

//Set the css class of an element
p.className = 'test';
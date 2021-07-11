/***************************************
100DaysOfCode-Challenge: Day 24
Challenge 24-1 - RSVP's application(WIP)
****************************************/

/*
Requrement:
Build an RSVP's application that allows us to keep track of who's coming and allows for editing the guest list - part 1
*/

const form = document.getElementById('registrar');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    //just for testing   
    console.log(text);
    const ul = document.getElementById('invitedList');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
});
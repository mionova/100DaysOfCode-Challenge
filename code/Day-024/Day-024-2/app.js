/***************************************
100DaysOfCode-Challenge: Day 24
Challenge 24-2 - RSVP's application(WIP)
****************************************/

/*
Requrement:
Build an RSVP's application that allows us to keep track of who's coming and allows for editing the guest list - part 2
*/

const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);
  ul.appendChild(li);
});
  
ul.addEventListener('change', (e) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  
  if (checked) {
    listItem.className = 'responded';
  } else {
    listItem.className = '';
  }
});
  
  
  
  
  
  
  
  
  
  
  
  
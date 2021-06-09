/***********************************
100DaysOfCode-Challenge: Day 16
Challenge 16-1 - Create DOM elements
************************************/

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptioninput = document.querySelector('input.description');
const descriptionp = document.querySelector('p.description');
const descriptionbutton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionbutton.addEventListener('click', () => {
  descriptionp.innerHTML = descriptioninput.value + ':';
});

//adding an li element
addItemButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
});


/***************************************************************
100DaysOfCode-Challenge: Day 16
Challenge 16-3 Remove nodes to remove an element from the DOM
****************************************************************/

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  //clear the input field
  descriptionInput.value = '';
});

//add an item
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  //adding an li element
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  //aappend node
  ul.appendChild(li);
  //clear the input field
  addItemInput.value = '';
});

//remove an item
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  //removing an li element
  let li = document.querySelector('li:last-child');
  //remove node
  ul.removeChild(li);
});
  
  
  
  
  
  
  
  
  
/**********************************************
100DaysOfCode-Challenge: Day 48
Project 2 - Data Pagination and Filtering - WIP
**********************************************/

/*
Some variables
*/

const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');

/*
Step 1: Display a page
`showPage` function to create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9 - 1;
  studentList.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      //adding an li element
      let li = document.createElement('li');
      li.innerHTML =
        `
          <div class="student-details">
            <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
          </div>
        `
      studentList.appendChild(li);
      li.className = "student-item cf";
    }
  }
}

/*
Step 2: Display pagination buttons
`addPagination` function to create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  //A variable to store all pagination buttons
  const buttons = linkList.getElementsByTagName('button');
  //A variable to store the value of the number of pagination buttons needed if we want to display 9 students on a page
  const numPaginationButtons = Math.ceil(list.length / 9);
  //remove any pagination buttons that might have previously been displayed
  linkList.innerHTML = '';

  //Looping over the variable for the number of pages
  for (let i = 0; i < numPaginationButtons; i++) {
    //adding an li element
    let li = document.createElement('li');
    li.innerHTML =
      `<button type="button">${i+1}</button>`
    linkList.appendChild(li);
  }

  // Setting up the first button as active
  const liFirstChild = document.querySelector('.link-list li:first-child button');
  liFirstChild.className = "active";

  //Creating an event listener to listen for clicks on each pagination button
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
      //Removing any existing "active" classes
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("active");
      }
      e.target.classList.add('active');

      //passing target.textContent as an argument because the text content of the clicked pagination button will contain the page number we want to display.
      showPage(data, e.target.textContent);
    });
  }
}


/*
Step 3: Filtering the list of students
___
The search should be case insensitive and work for partial matches. For example, if the value B or b is typed into the search field, students with “Bill” in the name would be shown. Likewise, if LL were typed into the search field, students with the first name "Bill" would appear, as well as students with a last name "Williams".
*/

/* adding an `input` and search `button` elements */
//Variables to reference the 'header' element
const header = document.querySelector('.header');

let label = document.createElement('label');
label.innerHTML =
  `
  <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  `
header.appendChild(label);
label.className = "student-search";


/* input` and search `button` elements functionality  */
//function to capture user input, compare against existing data, and create an array with filtered results
function performSearch(userInput, list) {
  const filteredList = [];
  for (let i = 0; i < list.length; i++) {
    const name = `${list[i].name.first} ${list[i].name.last}`.toLowerCase();
    //comparing user input to `name`
    if (name.includes(userInput.toLowerCase())) {
      //creating filteredList with matching student data
      filteredList.push(list[i]);
    }
  }
  return filteredList;
}

//empty state
function searchFunc(userInput) {
  const filteredDataList = performSearch(userInput, data);
  studentList.innerHTML = "";
  linkList.innerHTML = "";

  if (filteredDataList.length === 0) {
    studentList.innerHTML = `<div><h1 style="font-size: 28px">No results to display</h1></div>`;
  } else {
    showPage(filteredDataList, 1);
    addPagination(filteredDataList);
  }
}

//attaching addEventListener to the input box (more intuitive UX)
search.addEventListener('change', () => {
  const search = document.querySelector("#search");
  searchFunc(search.value);
});

// // Alternate solution: attaching addEventListener to the input box using 'keyup'
// search.addEventListener('keyup', () => {
//   const search = document.querySelector("#search");
//   searchFunction(search.value);
// });

const submit = document.querySelector("label button");

//attaching addEventListener to the search button
submit.addEventListener('click', () => {
  searchFunc(search.value);
});

//calling functions
showPage(data, 1);
addPagination(data);
/**********************************************
100DaysOfCode-Challenge: Day 43
Project 2 - Data Pagination and Filtering - WIP
**********************************************/

/*
Display a page
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students

---
Display a “page”
1. Create a function that will show a “page” of nine students.

2. This function should have two parameters:
  2.1  A list parameter to represent student data that will be passed as an argument when the function is called.
  2.2  A page parameter to represent the page number that will be passed as an argument when the function is called.

*/

function showPage(list, page) {
  let ul = document.getElementsByTagName('ul')[0];
  //adding an li element
  let li = document.createElement('li');
  li.innerHTML =
    `<li class="student-item cf">
  <div class="student-details">
    <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
    <h3>Ethel Dean</h3>
    <span class="email">ethel.dean@example.com</span>
  </div>
  <div class="joined-details">
    <span class="date">Joined 12-15-2005</span>
  </div>
</li>
`
  //append node
  ul.appendChild(li);
}

//for testing
showPage();

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons

---
3. Inside the function:
  3.1 Create two variables to store the start index and the end index of the list items to be displayed on the given page. To make this function dynamic, use the page parameter and some basic math to calculate the value of these variables like so:
      3.1  Start Index = (page parameter * items per page) - items per page
      3.2  End Index = page parameter * items per page

4. Select the UL element with a class of student-list and assign its value to a variable.
5. Use the innerHTML property set the HTML content of the student-list variable you just created to an empty string. This will remove any students that might have previously been displayed.
6. Loop over the list parameter.
7. Inside the loop:

    7.1 Write a conditional statement that checks if the current index (i) is greater than or equal to the start index variable and less than the end index variable.
    7.2 Inside that conditional:
       7.2.1 Create the DOM elements needed to display the information for each matching student 
*/



// Call functions
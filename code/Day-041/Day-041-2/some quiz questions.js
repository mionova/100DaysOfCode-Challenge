/******************************
100DaysOfCode-Challenge: Day 39
Challenge - Some Quiz questions
*******************************/

/*
Challenge 1
Task 1 of 2
Add an event handler that runs when the form is submitted, not just when the submit button has been clicked.

___

Task 2 of 2
Alter the callback function to use the event object. Using the event object, ensure that the browser's default form submit behavior does not occur when the form is submitted.

---

<!DOCTYPE html>
<html>
<head>
  <title>Submit Event</title>
</head>
<body>
<form>
  <label>Name:</label>
  <input type="text" name="name">
  <input type="Submit" name="submit" value="Submit">
</form>
  <script src="app.js"></script>
</body>
</html>
*/

const submitButton = form.querySelector('[type=Submit]');

form.addEventListener('submit', (e) => {
 e.preventDefault();
});


/*
Challenge 2
Complete the code to add a class of highlight to a <p> element that's an immediate previous sibling of the button being clicked.

---

<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript and the DOM</title>
    </head>
    <link rel="stylesheet" href="style.css" />
    <body>
        <section>
            <h1>Making a Webpage Interactive</h1>
            <p>Things to Learn</p>
            <ul>
                <li><p>Element Selection</p><button>Highlight</button></li>
                <li><p>Events</p><button>Highlight</button></li>
                <li><p>Event Listening</p><button>Highlight</button></li>
                <li><p>DOM Traversal</p><button>Highlight</button></li>
            </ul>
        </section>
        <script src="app.js"></script>
    </body>
</html>
*/

var list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.previousElementSibling.className='highlight';
  }
});


/*
2
*/

var list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.previousElementSibling.className='highlight';
  }
});
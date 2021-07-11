/******************************
100DaysOfCode-Challenge: Day 39
Challenge - Various Quizes
*******************************/

/*
Challenge 1
Task 1 of 2
Complete the code to add a class of highlight to a <p> element that's an immediate previous sibling of the button being clicked.

___

Task 2 of 2
Next, remove the removeMe element from the parent element.

---

<!DOCTYPE html>
<html>
    <head>
        <title>Parent Traversal</title>
    </head>
    <link rel="stylesheet" href="style.css" />
    <body>
        <ul>
            <li>Hello</li>
            <li>Hi</li>
            <li class="remove_me">Good bye!</li>
            <li>Howdy</li>
        </ul>
        <script src="app.js"></script>
    </body>
</html>
*/

var list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function (e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.previousChild.className = 'highlight';
  }
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

list.addEventListener('click', function (e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.previousElementSibling.className = 'highlight';
  }
});


/*
Challenge 3
Task 1 of 2
traverse to the parent element of the removeMe element.

___

Task 2 of 2
Next, change the color of each child paragraph to blue.

---

<!DOCTYPE html>
<html>
    <head>
        <title>Child Traversal</title>
    </head>
    <body>
        <section>
            <p>This is the first paragraph</p>
            <p>This is a slightly longer, second paragraph</p>
            <p>Shorter, last paragraph</p>
        </section>
        <footer>
            <p>&copy; 2019</p> 
        </footer>
        <script src="app.js"></script>
    </body>
</html>
*/

var section = document.querySelector('section');
var paragraphs = section.children;

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = 'blue';
}


/*
Challenge 4
Operators: Provide an example that checks whether one data is not equal to another data.
*/

var shouldBeTrue = 123 !== '123';


/*
Challenge 5
Operators: Provide examples of Logical And, Logical Or, Very Logical, Ternary Operator, and Logical Operator Short Circuiting
*/

//Logical And
var shouldBeTrue = true && true;

//Logical Or
var shouldBeTrue = false || true;

//Very Logical
var shouldBeTrue = (true || false) && (true && true);

//Ternary Operator
var shouldBeTrue = "b" === (false ? "a" : "b");

//Logical Operator Short Circuiting
var shouldBeHello = "Hello" || 5;
var shouldBe5 = "Hello" && 5;


/*
Challenge 6
Operators: Using Logical Operators in If Statements
*/

var shouldBeTen = 9;

// Fix the following condition so shouldBeTen becomes 10
if (5 > 4 && shouldBeTen >= 9) {
  shouldBeTen++;
}


/*
Challenge 7
Create a for loop to make longString a string with 6 A
*/

var longString = "";

for (var i = 0; i < 3; i++) {
  longString += "AA";
}
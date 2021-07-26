/**********************************
100DaysOfCode-Challenge: Day 59
Day 59-1 Clallbacks - Quiz questions
***********************************/

/*
Quiz Question 1
The startAnimation function should be triggered 2 seconds after the page loads. 

---
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <link rel='stylesheet' href='styles.css'>
    </head>
    <body>
        <section id="animateMe">
            <p>Animate Me in 2 Seconds!</p>
        </section>
        <script src='app.js'></script>
    </body>
</html>
*/

const section = document.getElementById("animateMe");

function startAnimation() {
  //If I had the hmtl and css associated with it, it woudl apply spinning animation to section element
  section.className = "spin";
}

setTimeout(startAnimation, 2000);



/*
Quiz Question 2
Modify the code in the app.js file to add the event listener to every button.

___
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <link rel='stylesheet' href='styles.css'>
    </head>
    <body>
        <section >
            <button id='button1'>Button 1</button>
            <button id='button2'>Button 2</button>
            <button id='button3'>Button 3</button>
        </section>
        <script src='app.js'></script>
    </body>
</html>
*/

const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

function spinElement(event) {
  //Applies spinning animation to button element
  event.target.className = "spin";
}

btn1.addEventListener('click', spinElement);
btn2.addEventListener('click', spinElement);
btn3.addEventListener('click', spinElement);
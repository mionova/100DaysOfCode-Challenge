/***************************************************
100DaysOfCode-Challenge: Day 16
Challenge 16-2 Project Warm Up: Fun DOM Manipulation
****************************************************/

"use strict";


/* Variables to target the `body` element */
const body = document.querySelector('body');


// 1. Create a `H1` element and store it in a variable
const h1 = document.createElement('h1');

// 1a. Set the `H1` element's `innerHTML` equal to "Fun DOM Manipulation"
h1.innerHTML = "Fun DOM Manipulation";

// 1a. Set the `H1` element's `id` equal to "main-heading"
h1.id = 'main-heading';

// 1b. Append the `H1` element to the `body` element - body variable created for you above
body.appendChild(h1);

// 2. Create a `DIV` element and store it in a variable
const div = document.createElement('div');

// 2a. Set the `DIV` element's `id` attribute equal to "boat-container"
div.id = 'boat-container';

// 2b. Set the `DIV` element's `class` attribute equal to "boat-container"
div.className = 'boat-container';
// 2c. Append the `DIV` element to the `body` element - body variable created for you above
body.appendChild(div);


// 3. Create an `IMG` element and store it in a variable
const img1 = document.createElement('img');

// 3a. Set the `IMG` element's `src` attribute equal to "img/boat.png"
img1.src = 'img/boat.png';

// 3b. Set the `IMG` element's `alt` attribute equal to "Tugboat"
img1.alt = 'Tugboat';

// 3c. Set the `IMG` element's `id` attribute equal to "boat-img"
img1.id = 'boat-img';

// 3d. Append the `IMG` element to the `DIV` element you created above
div.appendChild(img1);


// 4. Create another `IMG` element and store it in a variable
const img2 = document.createElement('img');

// 4a. Set the `IMG` element's `src` attribute equal to "img/mike.png"
img2.src = 'img/mike.png';

// 4b. Set the `IMG` element's `alt` attribute equal to "Mike The Frog"
img2.alt = 'Mike The Frog';

// 4c. Set the `IMG` element's `id` attribute equal to "mike"
img2.id = 'mike';

// 4d. Set the `IMG` element's `class` attribute equal to "mike"
img2.className = 'mike';

// 4e. Append the `IMG` element to the `body` element
div.appendChild(img2);
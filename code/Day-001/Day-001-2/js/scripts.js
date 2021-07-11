//Variables and Strings Challenge: Display a story, based on user input

// 1. Declare variables and capture input.
const firstWord = prompt("Enter your first word");
console.log(firstWord);
const secondWord = prompt("Enter your second word");
console.log(secondWord);
const thirdWord = prompt("Enter your third word");
console.log(thirdWord);


// 2. Combine the input with other words to create a story.
const story = `<p>There was a ${firstWord} who wanted to ${secondWord} in order to ${thirdWord}</p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = story;
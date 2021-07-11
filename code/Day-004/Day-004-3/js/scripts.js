//The purpose of this excercise is to refactor scripts-old.js using DRY principle

let html = '';
let red;
let green;
let blue;
let randomRGB;
const randomNumber = () => Math.floor(Math.random() * 256);


for (let i = 1; i <= 10; i++) {
    red = randomNumber();
    green = randomNumber();
    blue = randomNumber();
    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;
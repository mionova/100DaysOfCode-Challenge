/*********************************************
100DaysOfCode-Challenge: Day 59
Day 59-2 Clallbacks - Callbacks with Arguments
**********************************************/

/*
Apply blue, red, and green background colors to the elements past in
*/

const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
}

function makeBlue(element) {
    element.style.backgroundColor = "blue";
}

function makeGreen(element) {
    element.style.backgroundColor = "green";
}

function addStyleToElement(element, callback) {
    callback(element);
}

addStyleToElement(div1, makeRed); //makeRed(div1)
addStyleToElement(div2, makeBlue); //makeBlue(div2)
addStyleToElement(div3, makeGreen); //makeGreen(div3)
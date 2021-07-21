/***********************************
100DaysOfCode-Challenge: Day 54
Day 54-4 Closures - Uses for closers
************************************/

//addEventListener properly when you have multiple buttons on page

var buttons = document.getElementsByTagName('button');

function createHandler(name) {
  return function () {
    console.log(name);
  }
}

for (var i = 0; i < buttons.length; i += 1) {
  var button = buttons[i];
  var buttonName = button.innerHTML;
  button.addEventListener('click', createHandler(buttonName));
}
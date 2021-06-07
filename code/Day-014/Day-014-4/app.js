/*****************************************************
100DaysOfCode-Challenge: Day 14
Challenge 14-4 - Set variable to refer to a collection
******************************************************/

//Set the variable listItems to refer to a collection. The collection should contain all list items in the <ul> element with the ID of rainbow.

var listItems = document.querySelectorAll('ul#rainbow li');
var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];    
}

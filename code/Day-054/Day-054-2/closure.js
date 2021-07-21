/***********************************
100DaysOfCode-Challenge: Day 54
Day 54-2 Closures - What is closure?
***********************************/

/*
By taking an advantage of the local scope, we create a function inside of a function. 
"showDogs()" is called inner function
"dogHouse()" is called outer function

A closure looks like this: 
function outerFunction() {

  var someCount = 0;

  function innerFunction() {

    someCount++;
    console.log("Called" + someCount + " times");

  }

  return innerFunction;

}

counter1 = outerFunction();
counter2 = outerFunction();
counter1(); //Called 1 times
counter1(); //Called 2 times
*/

function dogHouse() {
  var dogs = 8;

  function showDogs() {
    console.log(dogs);
  }
  return showDogs;
}

var getDogs = dogHouse();

getDogs(); // 8
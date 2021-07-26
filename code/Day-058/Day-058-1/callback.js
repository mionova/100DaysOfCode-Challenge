/*******************************************************
100DaysOfCode-Challenge: Day 58
Day 58-1 Clallbacks - Introduction to Callback Functions
********************************************************/

/*
Function callbackFunction(){
  // Do something
}
function executeCallback(callback){
  // Do something
}

---
Passing an anonymys functio, another way of writing it:
function executeCallback(callback) {
  callback();
}

executeCallback(function() {
  console.log('hello');
})
*/

function executeCallback(callback) {
  callback();
}

// Print Hello
executeCallback(() => console.log('Hello'));

// Print Goodbye
executeCallback(() => console.log('Goodbye'));
/*****************************************************************
100DaysOfCode-Challenge: Day 18
Challenge 18-2 Delaying execution of a function with setTimeout();
*****************************************************************/


/*function say (something) {
function exec(func, arg) {
  func(arg);
}

exec((something) => {
  console.log(something);
}, 'Greetings, everyone!');
*/


window.setTimeout ((something) => {
  console.log(something);
}, 50000, 'Greetings, everyone!');
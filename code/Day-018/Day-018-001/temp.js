/************************************************
100DaysOfCode-Challenge: Day 18
Challenge 18-1 Setting up functions as parameters
************************************************/


/*function say (something) {
  console.log(something);
}

function exec (func, arg) {
  func(arg);
}

exec (say, 'Hello');
*/


function exec(func, arg) {
  func(arg);
}

exec((something) => {
  console.log(something);
}, 'Greetings, everyone!');
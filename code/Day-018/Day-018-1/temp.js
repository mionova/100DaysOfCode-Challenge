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

//passing a function into a function - super useful if, say, we want to delay the execution of another function, as shown in Day-018-002

exec((something) => {
  console.log(something);
}, 'Greetings, everyone!');

/* the unonimys function above is same as 
exec(function say(something) {
  console.log(something);
}, 'Greetings, everyone!');
*/
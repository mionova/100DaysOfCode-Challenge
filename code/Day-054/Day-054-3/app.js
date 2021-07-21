/*****************************************************************
100DaysOfCode-Challenge: Day 54
Day 54-3 Closures - Using closures to fix the problem with globals
******************************************************************/

function makeCounter(noun) {
  var count = 0;
  //this returned function forms our closure
  return function () {
    count += 1;
    return count + ' ' + noun;
  }
}

/* alternate way to write the closure:
function makeCounter(noun) {
  var count = 0;
  
  function counter () {
    count += 1;
    return count + ' ' + noun;
  }
  //this returned function forms our closure
  return counter;
}
*/
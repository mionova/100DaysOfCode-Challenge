/*******************************************
100DaysOfCode-Challenge: Day 54
Day 54-1 Closures - THe problem with closures
********************************************/

/*
Problem: our two functions are sharing the count variable in the global scope, causing the count variable to be incremented every time either one of the functions is executed. 
This introduces a bug in the script.
*/

var count = 0;

function countBirds() {
  count += 1;
  return count + ' birds';
}

function countDogs() {
  count += 1;
  return count + ' dogs';
}

//countBirds();
// -> "1 birds"

//countDogs);
// -> "2 dogs" //error
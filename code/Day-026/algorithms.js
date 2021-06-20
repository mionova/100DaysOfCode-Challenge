/******************************
100DaysOfCode-Challenge: Day 26
Challenge - Various algorithms
*******************************/


//FlipPairs
var flipPairs = function (string) {

  var flipPairString = string.split("");
  console.log(flipPairString);
  var reversedFlipPairString =[];
  
  for (var i = 0; i < flipPairString.length; i=i+2) {
  reversedFlipPairString.push(flipPairString[i+1]);
  reversedFlipPairString.push(flipPairString[i]);
}
  return reversedFlipPairString.join('');
}

console.log(flipPairs("hello world"));
// -> ehll oowlrd



//Detect Outlier Number
var detectOutlierValue = function (array) {
  // Implement your code below
  var evenNumbers = [];
  var oddNumbers = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbers.push(array[i]);
    } else oddNumbers.push(array[i]);
}
  if (evenNumbers.length < oddNumbers.length) {
  return evenNumbers[0];
  } else return oddNumbers[0];
}

console.log(detectOutlierValue([1, 3, 4, 7, 9, 11]));
// -> 4
console.log(detectOutlierValue([2, 4, 6, 10, 11, 14]));
// -> 11



//Find Target Pair For Sum
var findPairForSum = function (array, sum) {
  // Implement your code below
  var answer =[];
  for (var j = 0; j < array.length; j++) { 
    for (var i = 0; i < array.length; i++) {
    if (array[j] + array[i] === sum && answer.length == 0) {
      answer.push(array[j], array[i]);
      break;
    }
}
}
if (answer[0] > answer[1]) {
  answer.reverse();
}
return answer;
};

console.log(findPairForSum([3, 7, 10, 15, 9], 19));
// -> [9, 10]
console.log(findPairForSum([6, 8, 12, 14, 2, 4], 6));
// -> [2, 4]



//Average of Numbers
var average = function (array) {
  // Implement your code below
  var sum = 0;
  var average;
  
  for (var i=0; i < array.length; i++){
    sum += array[i];
  }
  average = sum / array.length;
  return average;
}

console.log(average([1, 3, 5, 7, 9]));
// -> 5
console.log(average([2, 4, 6, 8, 10]));
// -> 6



//Isogram
var isIsogram = function (word) {
  // Implement your code below;
  return !/(.).*\1/.test(word);
}

console.log(isIsogram("helo"));
// -> true
console.log(isIsogram("helicopter"));
// -> false
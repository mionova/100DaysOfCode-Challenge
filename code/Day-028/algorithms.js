/******************************
100DaysOfCode-Challenge: Day 28
Challenge - Various algorithms
*******************************/

/*
Write a function that converts an integer into a Roman Numeral String.
Roman numerals are made of capital letters.
1 is I
2 is II
3 is III
4 is IV
5 is V
6 is VI
7 is VII
8 is VIII
9 is IX
10 is X
40 is XL
50 is L
90 is XC
100 is C
500 is D
1000 is M
*/
var romanNumeral = function (integer) {
    if(integer < 1){ return "";}
    if(integer >= 1000){ return "M" + romanNumeral(integer - 1000);}
    if(integer >= 900){ return "CM" + romanNumeral(integer - 900);}
    if(integer >= 800){ return "DCCC" + romanNumeral(integer - 800);} 
    if(integer >= 700){ return "DCC" + romanNumeral(integer - 700);} 
    if(integer >= 600){ return "DC" + romanNumeral(integer - 600);} 
    if(integer >= 500){ return "D" + romanNumeral(integer - 500);} 
    if(integer >= 400){ return "CD" + romanNumeral(integer - 400);} 
    if(integer >= 300){ return "CCC" + romanNumeral(integer - 300);}  
    if(integer >= 200){ return "CC" + romanNumeral(integer - 200);} 
    if(integer >= 100){ return "C" + romanNumeral(integer - 100);}
    if(integer >= 90){ return "XC" + romanNumeral(integer - 90);}
    if(integer >= 50){ return "L" + romanNumeral(integer - 50);}
    if(integer >= 40){ return "XL" + romanNumeral(integer - 40);}
    if(integer >= 10){ return "X" + romanNumeral(integer - 10);}
    if(integer >= 9){ return "IX" + romanNumeral(integer - 9);}
    if(integer >= 5){ return "V" + romanNumeral(integer - 5);}
    if(integer >= 4){ return "IV" + romanNumeral(integer - 4);}
    if(integer >= 1){ return "I" + romanNumeral(integer - 1);}  
}

console.log(romanNumeral(3));
// -> III
console.log(romanNumeral(5));
// -> V
console.log(romanNumeral(9));
// -> IX



/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
*/
var findTheDifference = function (arr1, arr2) {
  var newArray=[];
  // Implement your code below
    for ( i = 0; i < arr1.length; i ++ ) {
      if (arr2.indexOf(arr1[i]) === -1) {
        newArray.push(arr1[i]);
        // checking if the the value arr1[i] exists in newArray
      }
    }

    for ( j=0; j<arr2.length; j++ ) {
      if (arr1.indexOf(arr2[j]) === -1) {
        newArray.push(arr2[j]);
        // checking if the the value arr1[i] exists in newArray
      }
    }
  return newArray;
};


console.log(findTheDifference([1, 2, 3, 4], [1, 2, 5, 6]));
// -> [3, 4, 5, 6]



/*
Card Counting
*/
var cardCounterCreator = function () {
  var count = 0;
  
  var cardCounter = function(card) {
    // Write your function below
    switch (card) {
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
      count++;
      break;
    case '10':
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
    default:
  }
    
  if (count <= 0) {
    return count + " Hold";
    } else {
      return count + " Bet";
    }  
  }
  
 return cardCounter;
}

var cardCounter = cardCounterCreator();

console.log(cardCounter("7"));
// -> 0 Hold
console.log(cardCounter("3"));
// -> 1 Bet
console.log(cardCounter("K"));
// -> 0 Hold
console.log(cardCounter("10"));
// -> -1 Hold
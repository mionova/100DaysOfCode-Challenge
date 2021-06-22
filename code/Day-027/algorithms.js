/******************************
100DaysOfCode-Challenge: Day 27
Challenge - Various algorithms
*******************************/


/*
Is this a word that reads the same backward as forward, e.g., madam
*/
var isPalindrome = function (word) {
  return word === word.split("").reverse().join("");
};

console.log(isPalindrome("racecar"));
// -> true
console.log(isPalindrome("hello"));
// -> false

console.log(flipPairs("hello world"));
// -> ehll oowlrd



/*
Matching characters
*/
var matchingCharacters = function (str1, str2) {
  // Implement your code below
  // converting the strings into arrays
   var str1 = str1.split('');
   var str2 = str2.split('');
   var str3 =[];
 
   for(let i = 0; i < str2.length; i++) { 
         for(var j = 0; j < str1.length; j++) { 
             if(str2[i] === str1[j]) { 
                 // Push to a new array if common element found 
             str3.push(str2[i]);
             } 
         } 
   }
   str2.sort();
   str3.sort();
 
   // if length is not equal 
   if(str2.length!=str3.length) 
    return false; 
   else
   { 
   // comapring each element of array 
    for(var k=0;k<str2.length;k++) 
    if(str2[k]!=str3[k]) 
     return false; 
     return true; 
   } 
   }
 
 
 console.log(matchingCharacters("mary", "army"));
 // -> true
 console.log(matchingCharacters("hello", "hew"));
 // -> false  
 


/*
Remove Falsy Values
*/
var removeFalsy = function (arr) {
  // Implement your code below
  nonFalsyArray=[];
  for (var i=0; i<arr.length; i++){
    if (arr[i]) {
        nonFalsyArray.push(arr[i]);
    }
  }
  
  return nonFalsyArray;
};

console.log(removeFalsy([1, undefined, "hello", "", false, 5]));
// -> [1, "hello", 5]



/*
Caesars Cipher
*/
var rot13 = function (string) {
  
  //  Split the string into an array using .split('')
    string = string.split('');
    var characterArray = [];
    var code;
    var joined;
  
    for (var i = 0; i < string.length; i++) {
      if (string[i].match(/[a-z]/i)) {
        // letter is a-z
        // Use the charCodeAt() method to get the char code of each character in the array
        code = string[i].charCodeAt();
        // get the charcode
        // Then use the formula (code - 65 + 13) % 26 + 65 to get the new code for each character
        code = (code - 65 + 13) % 26 + 65;  
        // do the 13 charcode shift
      } else {
        // not a-z, just get the charcode and not do the 13 shift
        code = string[i].charCodeAt();
      }
  
      // Use String.fromCharCode() to turn the new code back into english letters
      var myString = String.fromCharCode(code);
      characterArray.push(myString);
    }
    // Join the array back together using .join('')
    joined = characterArray.join('');
    return joined;
  };
  
  console.log(rot13("SERR CVMMN!"));
  // -> FREE PIZZA!
/******************************
100DaysOfCode-Challenge: Day 32
Challenge - Various algorithms
*******************************/

/*
Regular Expressions: Use Regex to Replace "hello" with "good morning"
*/

var regex = /hello/;

var str = "hello world!";

var str2 = str.replace(regex, 'good morning');

console.log(str2);
// -> good morning world!


/*
Regular Expressions: Finding Numbers With Regex
Construct a Regex that will find any combination of numbers
*/
var regex = /\d\d/;

var str = 'She sells 10 seashells by the seashore.';

var str2 = str.replace(regex, 'NUMBER');
console.log(str2);
// -> She sells NUMBER seashells by the seashore.

var str3 = 'The shells she sells are definitely 30 seashells.';

var str4 = str3.replace(regex, 'NUMBER');
console.log(str4);
// -> The shells she sells are definitely NUMBER seashells.



/*
Regular Expressions: Using the Global Flag to Find All Words
Replace all "sea" with "ocean".
*/
var regex = /sea/g ;

var str = "She sells seashells on the seashore.";

var str2 = str.replace(regex, 'ocean');

console.log(str2);
// -> She sells oceanshells on the oceanshore.



/*
Algorithms: Search and Replace
Replace all targets in the sentence body with the replacement word.
*/
var replacer = function (sentence, target, replacement) {

  var res = sentence.replace(target, function (){
    if (target == target.toLowerCase()){
     // The character is lowercase
      return replacement;
     }
    else
    {
    // The character is uppercase
      return replacement.charAt(0).toUpperCase() + replacement.slice(1);;
    }
    });

  return res;
}

console.log(replacer("Lets go for a picnic on this Sunny day", "Sunny", "rainy"));
// -> Lets go for a picnic on this Rainy day

console.log(replacer("The music is really funky!", "funky", "classy"));
// -> The music is really classy!

console.log(replacer("Better than sliced Bread", "Bread", "toasties"));
// -> "Better than sliced toasties"



/*
Algorithms: Missing Letter
In this exercise, you are given a lower case string of letters that follow the order of the alphabet. "abcd...xyz". In the string, there will be a missing letter. Find the missing letter and return it.
*/
var missingLetter = function (string) {
  var array = string.split("");
  var code;
  for (var i=1; i<array.length; i++) {
    if (string.charCodeAt(i) !== string.charCodeAt(i-1) +1) {
      code = string.charCodeAt(i) -1;
      return String.fromCharCode(code);
    }
  }
return undefined;  
};

console.log(missingLetter("abce"));
// -> d
console.log(missingLetter("jkmno"));
// -> l
console.log(missingLetter("abc"));
// -> undefined
console.log(missingLetter("cdefg"));
// -> undefined
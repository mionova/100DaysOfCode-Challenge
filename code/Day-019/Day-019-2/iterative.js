/************************************************************
100DaysOfCode-Challenge: Day 19
Challenge 19-1 - Code structure methodologies: Narrative flow
*************************************************************/

//using iterative coding approach to make code more readable and easier to follow
const word = "computer";
const index = Math.floor(Math.random() * word.length);
const letter = "b";

/**
  * Replaces a letter in a word
  * @param {string} string - Word being changed
  * @param {number} index - Index of letter to be replaced
  * @param {string} letter - letter to replace above letter with
  * @return {string} Word after letter has been replaced
  */
 
function replaceLetter(string, index, letter){
  const splitString = string.split("");
  splitString[index] = letter;

  // for tesging purpose
  console.log(splitString);

  const newString = splitString.join("");

  // for tesging purpose
  console.log(newString);
  
  return newString;
}

replaceLetter(word, index, letter);

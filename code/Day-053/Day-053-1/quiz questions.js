/**********************************
100DaysOfCode-Challenge: Day 53
Day 53-1 Challenge - Various Quizes
***********************************/

/*
Challenge 1
Task 1 of 2
In this challenge you'll write a validator for a hexadecimal string used to set a CSS color. Hexadecimal values for css colors start with a pound sign, or hash (#), then six characters that can either be a numeral or a letter between A and F, inclusive. Two examples of these strings would be #FF4569 and #578E9A.
For this step of the challenge, write a regular expression that will match any hexadecimal string and store it in a variable named hexRegEx. The regex should be case-insensitive. Assume that the string will always be 7 characters.
___

Task 2 of 2
Now, use the test() method to test the string in text against the regular expression you just created. Remember the test() method returns a true or false value. Return the result of testing the string from the isValidHex method.

---

<!DOCTYPE html>
<html>

<head>
    <title>DOM Manipulation</title>
</head>
<link rel="stylesheet" href="style.css" />

<body>
    <div id="content">
        <p>Enter a valid hex value below to make the screen turn green.</p>
        <input type="text" id="hex">
    </div>
    <script src="app.js"></script>
</body>
</html>
*/


function isValidHex(text) {
  var hexRegEx = /^#[a-fA-F0-9]{6}$/;
  return hexRegEx.test(text);
}

const hex = document.getElementById("hex");
const body = document.getElementsByTagName("body")[0];

hex.addEventListener("input", e => {
  const text = e.target.value;
  const valid = isValidHex(text);
  if (valid) {
    body.style.backgroundColor = "rgb(176, 208, 168)";
  } else {
    body.style.backgroundColor = "rgb(189, 86, 86)";
  }
});

const hex = document.getElementById("hex");
const body = document.getElementsByTagName("body")[0];

hex.addEventListener("input", e => {
  const text = e.target.value;
  const valid = isValidHex(text);
  if (valid) {
    body.style.backgroundColor = "rgb(176, 208, 168)";
  } else {
    body.style.backgroundColor = "rgb(189, 86, 86)";
  }
});



/*
Challenge 2
This challenge contains a form that will accept a first and last name (separated with a space), and display the last name first, then a comma, then a space, then the first name. Your challenge is to create a variable newText, and assign a replacement string to that variable. Be careful to match the exact variable name, because that's what is passed into replace(). You'll also need to reference the values captured by the parentheses in the regex.

---

<!DOCTYPE html>
<html>

<head>
    <title>DOM Manipulation</title>
</head>
<link rel="stylesheet" href="style.css" />

<body>
    <div id="content">
        <form>
            <label for="name">Enter your first and last name, please.</label>
            <br />
            <input type="text" id="name" name="name">
            <button type="submit">Reformat</button>
        </form>
        <div>
            <h2>Reformatted name:</h2>
                <p id="reformatted"></p>
        </div>
    </div>
    <script src="app.js"></script>
</body>

</html>
*/


function reformatName(text) {
  const rawName = /^(\w+)\s(\w+)$/;
  let newText = '$2, $1';

  return text.replace(rawName, newText);
}

const form = document.querySelector("form");
const input = form.querySelector("input");
const reformatted = document.getElementById("reformatted");

form.addEventListener("submit", e => {
  e.preventDefault();
  reformatted.textContent = reformatName(input.value);
});
/********************************************************************************
100DaysOfCode-Challenge: Day 52
Challenge Day 52-3 Form validation: username, password, phone, and email address
********************************************************************************/


const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");

/*
Validators
 */

// Can only contain letters a-z in lowercase
function isValidUsername(username) {
  return /^[a-z]+$/.test(username);
}

// Must contain a lowercase, uppercase letter and a number
function isValidPassword(password) {
  return /([a-z])/.test(password) &&
    /[A-Z])/.test(password) &&
    /[0-9])/.test(password);
}
/*
Alternate Password Regex solution, using "lookahead"
// Must contain a lowercase, uppercase letter and a number
function isValidPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(password);
}
*/

// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(telephone) {
  return /^\(\d{3}\)\s\d{3}-\d{4}$/.test(telephone);
}

// Must be a valid email address
function isValidEmail(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}
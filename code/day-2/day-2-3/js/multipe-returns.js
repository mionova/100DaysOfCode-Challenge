/*
Check and display an alert if a form field is empty
*/


function isFieldEmpty() {
  const field = document.querySelector('#info');
  if (field.value === ' ') {
    return true; //if the field is empty, the function returns true
    } else {
      return false;
   }
  } 
  
  const fieldTest = isFieldEmpty();
  
  if (!fieldTest) {
    alert("You need to enter something in this text field");
  }
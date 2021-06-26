/**
 * Developed by: Robert Manolis
 */

/* Function to return a random object */
function createRanCharObj() {

  // Array of icon codes for the random object
  const arrayOfIcons = ['&#129302;', '&#128125;', '&#128123;', '&#129313;'];

  // Array of attributes — random object gets three of these
  const arrayOfAttributes = ['experience', 'strength', 'wisdom', 'endurance', 'charisma'];

  // Function to return a random number between zero and ten to set the number value of the character attributes
  function ranValue() {return Math.ceil(Math.random() * 10);}

  // Array to hold three random but unique attributes
  const indexes = [];

  // Get three random but unique attributes and store in array above 
  do {

    // Grab a random index from the `arrayOfAttributes`
    const ranIndex = Math.floor(Math.random() * arrayOfAttributes.length);

    // If random number is not already in array, push it to array
    if (!indexes.includes(ranIndex)) {
      indexes.push(ranIndex);
    }

    // If there's less than three items in array, run the `do` block again
  } while (indexes.length < 3);

  // Create empty object, add random object properties and values, and return it
  const ranCharObj = {};
  ranCharObj.icon = arrayOfIcons[Math.floor(Math.random() * arrayOfIcons.length)];
  ranCharObj[arrayOfAttributes[indexes[0]]] = ranValue();
  ranCharObj[arrayOfAttributes[indexes[1]]] = ranValue();
  ranCharObj[arrayOfAttributes[indexes[2]]] = ranValue();
  return ranCharObj;
}

/* Function to print keys and values from random object */
function printStats(obj) {

  // Get object parameter's keys as an array
  const objProps = Object.keys(obj);

  // DOM selector for printing character stats
  document.querySelector('#stat-character').innerHTML = obj.icon;

  // Spread operator and DOM selector combo to make an array that we can `forEach` over, 
  // and use the `innerHTML` property of the elements to the property and value of our random object
  [...document.getElementsByClassName('stat-name')].forEach((el, i) => el.innerHTML = `${objProps[i+1]}:`);
  [...document.getElementsByClassName('stat-value')].forEach((el, i) => el.innerHTML = obj[objProps[i+1]]);
  return;
}
/************************************************************
100DaysOfCode-Challenge: Day 19
Challenge 19-1 - Code structure methodologies: Narrative flow
*************************************************************/

//using narrative flow to make code more readable and easier to follow

function crust() {
  const options = ["thin", "hand tossed", "pan"];

  return options[Math.floor(Math.random() * options.length)];
}

function cheese() {
  const options = ["provolone", "parmesan", "mozzarella"];

  return options[Math.floor(Math.random() * options.length)];
}

function veggies() {
  const options = ["green Peppers", "onions", "mushrooms", "banana peppers"];

  return options[Math.floor(Math.random() * options.length)];
}

function meat() {
  const options = ["pepperoni", "sausage", "ham"];

  return options[Math.floor(Math.random() * options.length)];
}

function createPizza() {
  return `Your random pizza is a ${crust()} pizza with ${meat()}, ${veggies()}, and ${cheese()}!`
}

console.log(createPizza())

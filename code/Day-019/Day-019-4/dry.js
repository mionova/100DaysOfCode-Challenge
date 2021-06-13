/***********************************************
100DaysOfCode-Challenge: Day 19
Challenge 19-4 Refactoring using DRY methodology
************************************************/

// refactoring using DRY principle

const fruits = [
  { name: "grapes", price: "2.50" },
  { name: "oranges", price: "1.50" },
  { name: "apples", price: "2.75" },
];

const vegetables = [
  { name: "carrots", price: "2.25" },
  { name: "celery", price: "1.75" },
  { name: "red peppers", price: "3.00" },
];

function convertPrice(array) {
  for (const object of array) {
    object["price"] = parseFloat(object["price"]);
  }
}

function addLocation(array) {
  for (const object of array) {
    object["location"] = "produce section";
  }
}

convertPrice(fruits);
convertPrice(vegetables);
addLocation(fruits);
addLocation(vegetables);

console.log(fruits);
console.log(vegetables);

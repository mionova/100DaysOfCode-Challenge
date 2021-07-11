/***********************************************
100DaysOfCode-Challenge: Day 19
Challenge 19-4 Refactoring using DRY methodology
************************************************/

// refactoring existing code by applying KISS principle



const fruits = [{
    name: "grapes",
    price: "2.50"
  },
  {
    name: "oranges",
    price: "1.50"
  },
  {
    name: "apples",
    price: "2.75"
  },
];

const vegetables = [{
    name: "carrots",
    price: "2.25"
  },
  {
    name: "celery",
    price: "1.75"
  },
  {
    name: "red peppers",
    price: "3.00"
  },
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

/*

Starting code, prior to refactoring:

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

fruits[0]["price"] = parseFloat(fruits[0]["price"]);
fruits[1]["price"] = parseFloat(fruits[1]["price"]);
fruits[2]["price"] = parseFloat(fruits[2]["price"]);

vegetables[0]["price"] = parseFloat(vegetables[0]["price"]);
vegetables[1]["price"] = parseFloat(vegetables[1]["price"]);
vegetables[2]["price"] = parseFloat(vegetables[2]["price"]);

fruits[0]["location"] = "produce section";
fruits[1]["location"] = "produce section";
fruits[2]["location"] = "produce section";

vegetables[0]["location"] = "produce section";
vegetables[1]["location"] = "produce section";
vegetables[2]["location"] = "produce section";

console.log(fruits);
console.log(vegetables);

*/
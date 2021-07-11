/*****************************************************************************************************************************************************
100DaysOfCode-Challenge: Day 8
Challenge 8-3: Write a couple of more functions, one to return a list of the names of all products and another one to calculate the total value of all the products in the array
*****************************************************************************************************************************************************/

//Run this file using Node.js or the browser console

// Create prducts array
let products = [];

// Add objects to the array. Each object is be a single product, with the following 3 properties: 
// -- name
// -- inventory
// -- unit_price
products.push({
  name: 'Chair',
  inventory: 36,
  unit_price: 199.99
})

products.push({
  name: 'Table',
  inventory: 3,
  unit_price: 349.99
})

products.push({
  name: 'Sofa',
  inventory: 6,
  unit_price: 1990.99
})

console.log(products);


// Create a function named listProducts(). The function accepts 1 parameter -- the array of products and returns an array of just the names of the products.
function listProducts(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i].name);
  }
  return arr;
}


// Call the listProducts() function and log the returned value to the console.
console.log(listProducts(products));


// Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array.
function totalValue(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i].inventory * array[i].unit_price;
  }
  return total;
}


// Call the totalValue() function and log the returned value to the console.
console.log(totalValue(products));
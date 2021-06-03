/**************************************************************************************
100DaysOfCode-Challenge: Day 8
Challenge 8-2: Create a couple of functions to add to inventory and to process a sale
**************************************************************************************/

//Run this file using Node.js or the browser console

// Create an object named product, with the following 3 properties: name, inventory, unit_price
let product = {
    name: 'Soda',
    inventory: 36,
    unit_price: 1.99
}

// Create a function named addInventory(). The function accepts 2 parameters -- the product object, and the number to add to the inventory. The function adjusts the product object's inventory property by adding the number passed into the function. 
function addInventory(product, inventory) {
   let add = inventory; 
   product.inventory = product.inventory + add; 
   console.log(`${add} ${product.name}s added to the inventory`)
	 console.log(product.inventory);
}

// Call the addInventory() function
addInventory(product, 3); 

// Create a function that accepts 2 parameters -- the product object, and the number to of products that were sold. The function adjusts the product object's inventory property by subtracting the number passed into the function. The function also returns the total sale.
function processSale(product, quantity) {
    let sold = quantity; 
    let total;
    product.inventory = product.inventory - sold; 
    total = quantity * product.unit_price;
    console.log(`${sold} ${product.name}s sold`);
    console.log(`Total Sale:  ${total}`);
 }

// Call the processSale() function and display a message about the total price of the sold units.
processSale(product, 2); 
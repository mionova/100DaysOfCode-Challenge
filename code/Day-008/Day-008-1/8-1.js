/***************************************************************************************
100DaysOfCode-Challenge: Day 8
Challenge 8-1: Create a simple object and print the properties and values to the console
****************************************************************************************/

//Run this file using Node.js or the browser console

//Create an object using object literal syntax
let book = {};

// Add a title property to the book object and assign it a string value
book.title = 'Harry Potter and the Sorcerer\'s Stone';

// Add an author property to the book object and assign it a string value
book.author = 'J.K. Rowling';

// Add a publish_year to the book object and assign it a number to represent the year the book was published
book.publish_year = 2020;

// Use a for-in loop to print the book object to the console:
for(let key in book) {
    console.log(key + ": " + book[key]);
}
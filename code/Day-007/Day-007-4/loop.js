//Create a function that uses a for loop to generate an array contiaining 10 random numbers and print all of them to the console. Use the console or Node.js to run the program
function random100() {
	return Math.floor(Math.random() * 100) + 1;
}

//Create a function that uses a for loop to generate an array contiaining 10 random members
var arr = [];

function createRandomList() {
	for (let i = 0; i < 10; i++) {
		arr[i] = random100()
		arr.push(arr[i]);
	}
	return arr;
}

// Call the createRandomList() function and store the results in a variable
var myRandomList = createRandomList();
console.log(myRandomList);


// Access each element in the array.  
for (let i = 0; i < arr.length; i++) {
	console.log(`Index ${i} in the array is ${arr[i]}`);
}
//Practice Arrow Functions in JavaScript

const multiplyUs = (num1, num2) => console.log(num1 * num2); 

const subtractFromTen = num => {
	const diff = 10 - num; 
	console.log(diff);
}

const printDate = date => {
	console.log(date);
}

const addToTen = num => 10 + num;

const divideUs = (num1, num2) => num1/num2;

const printMyName = () => {
  let myName = 'Ashley';
	console.log(myName);
}

const multiplyByTen = num => return 10 * num;

const printToTen = () => {
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
}

const addUs = (num1, num2) => console.log(num1 + num2);


//Testing

multiplyUs(2,6);
subtractFromTen(4);
printDate('1/16/18');
addToTen(10);
divideUs(2,3);
printMyName();
multiplyByTen();
printToTen();
addUs(2,3);
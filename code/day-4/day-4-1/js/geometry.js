//Function that calculates the area of a rectangle.
const rectangleArea = function(width, length) {
	return width * length ;
}

//Function that calculates the volume of a rectangular prism.
const prismVolume = function(width, height, length) {
	return width * length * height ;
}

//Function that calculates the area of a circle.
const circleArea = function(radius) {
	return Math.PI * Math.pow(radius, 2);	
	//return Math.PI * radius * radius ;
}
 
//Function that calculates the volume of a sphere.
const volumeSphere = function(radius) {
	return 4/3*Math.PI * Math.pow(radius, 3);
} 

//Testing
console.log(rectangleArea (5, 22));
console.log(prismVolume (4.5, 12.5, 17.4));
console.log(circleArea (7.2));
console.log(volumeSphere (7.2));










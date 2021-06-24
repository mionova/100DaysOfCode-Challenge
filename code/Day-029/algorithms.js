/******************************
100DaysOfCode-Challenge: Day 29
Challenge - Various algorithms
*******************************/

/*
Smallest Common Multiple

Find the smallest common multiple of a range of numbers.

Smallest common multiple (X) of two numbers (A, B) is the smallest number that can be evenly divided by both numbers (A, B).
I.e. For the pair 4 and 5, the smallest common multiple is 20.If you increase the range of numbers, say, to 3, 4, and 5. Their smallest common multiple becomes 60.
60 is the smallest number that can be evenly divided by all three numbers, 3, 4, and 5.
*/

function smallestCommonM(arr) {
  arr.sort();
  var min = arr[0];
  var max = arr[1];
  var array = [];
  
     function range(min, max) {
         for (var i = min; i <= max; i++) {
             array.push(i);
         }
         return array;
     }
 
     function gcd(a, b) {
         return !b ? a : gcd(b, a % b);
     }
 
     function lcm(a, b) {
         return (a * b) / gcd(a, b);   
     }
 
     var multiple = min;
     range(min, max).forEach(function(n) {
         multiple = lcm(multiple, n);
     });
 
     return multiple;
 }
 
 console.log(smallestCommonM([1, 5]));
 // -> 60
 console.log(smallestCommonM([5, 1]));
 // -> 60
 console.log(smallestCommonM([1, 13]));
 // -> 360360



/*
Sum all the prime numbers smaller or equal to a MAX number.

A prime number is defined as a number GREATOR THAN ONE and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

Prime numbers sequence:

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ...

Sum of prime numbers smaller than or equal to 10 would be:

2 + 3 + 5 + 7 = 17
*/
var sumPrimes = function (max) {
  
  // inner function that checks whether a number is a prime number 
  var isPrime = function (num) {
    for (var i = 2; i < num; i++)
      if(num % i === 0) return false;
      return num > 1;
  }
  
    //  array variable to store a list of prime numbers that we will find
   var primeNumbers =[];
   var sum = 0; 
  
  for (var i = 2; i <= max; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
      }
    }
  
  // for personal verification; not part of the task in hand  
  console.log(primeNumbers); 
  
  for (var i = 0; i < primeNumbers.length; i++) {
    sum = sum + primeNumbers[i];
  };
  
  return sum;
  };
  
  console.log(sumPrimes(10));
  // -> 17
  console.log(sumPrimes(977));
  // -> 73156




/******************************
100DaysOfCode-Challenge: Day 33
Challenge - Various algorithms
*******************************/

/*
Algorithms: Sum of Odd Fibonacci Numbers
Write a function that calculates the sum of ODD fibonacci numbers smaller than or equal to a given MAX number.

----
Fibonacci sequence is characterized by the fact that every number after the first two is the sum of the two preceding ones:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
I.e. If the function is given input 10, your function should return 10
1 + 1 + 3 + 5 = 10
*/

var sumOddFibonacci = function (max) {
  //array to store the fibonacci sequence with the first two value given [1, 1]
    array = [1,1];
    var nextFib = 1;
    var fibNum = 0;
  
  // function that finds the next fibonacci number given previous two numbers
   fibNum = array[nextFib-1] + array[nextFib];
  
  // while loop to keep adding new fibonacci numbers to the array, the stop condition is nextFib <= max
    while (fibNum <= max) {
      fibNum = array[nextFib-1] + array[nextFib];
      if (fibNum <= max) {
        array.push(fibNum);
      }
      nextFib++;
    }
  
    console.log(array)
    
    // once all the fibonacci numbers are created, a filter() method filters out all the even numbers
    var odds = array.filter(function(x) {
     return x % 2 !== 0;
   });
   
    // reduce() method to sum up all the numbers
    var result = odds.reduce ( function ( acc, val ) { return acc + val; }, 0);
    return result;
    
  };
  
  console.log(sumOddFibonacci(10));
  // -> 10
  console.log(sumOddFibonacci(1));
  // // -> 2
  console.log(sumOddFibonacci(1000));
  // // -> 1785
  console.log(sumOddFibonacci(4000000));
  // // -> 4613732


/*
Algorithms: Smallest Common Multiple
Find the smallest common multiple of a range of numbers.

----
Smallest common multiple (X) of two numbers (A, B) is the smallest number that can be evenly divided by both numbers (A, B).
I.e. For the pair 4 and 5, the smallest common multiple is 20.

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
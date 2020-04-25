/**

 ** Exercise 1: The odd ones out **

 Rewrite the following function using map and filter. 
 Avoid using for loop or forEach.
 The function should still behave the same.

 */
"use strict";

const myNumbers = [1, 2, 3, 4];

const doubleEvenNumbers = myNumbers
  .filter(number => number % 2 === 0)
  .map(number => number * 2);

console.log(doubleEvenNumbers); // Logs "[4, 8]" to the console
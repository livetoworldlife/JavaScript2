/**
 
 ** Exercise 5: The lottery machine **
 
Don't you just love the thrill of the lottery? 
What if I told you we can make our own lottery machine? 
Let's get started!

   Write a
 function that takes 4 arguments.

   - A start value
   - An end value
   - A callback that executes if the number is divisible by 3
   - A callback that executes if the number is divisible by 5

 The  function should first generate an array containing values from start value to end value(inclusive).

 Then the  function should take the newly created array and iterate over it,
  and calling the first callback
 if the array value is divisible by 3.

 The function should call the second callback
 if the array value is divisible by 5.

 Both functions should be called
 if the array value is divisible by both 3 and 5.

*/
"use strict";

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // make array
  for (let currentIndex = startIndex; currentIndex <= stopIndex; currentIndex++) {
    numbers.push(currentIndex);
  }
 
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  numbers.forEach(item => {
    if (item % 3 === 0 && item % 5 === 0) {
      console.log(item + ' is divisible by both ' + threeCallback() + ' and ' + fiveCallback());
    } else if (item % 3 === 0) {
      console.log(item + ' is divisible by ' + threeCallback());
    } else if (item % 5 === 0) {
      console.log(item + ' is divisible by ' + fiveCallback());
    }
  });
}
function sayThree() {
  return 3;
}
function sayFive() {
  return 5;
}
threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive


//The End



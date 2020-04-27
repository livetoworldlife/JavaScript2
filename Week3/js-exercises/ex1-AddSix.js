"use strict";

/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24,  36

 */


function createBase(number) {
  // Put here your logic...
  let sum = 9;
  let multiplier = 0.5;
  return function () {
    multiplier += 0.5;
    return sum += number * multiplier;
  };

}

let addSix = createBase(6);

// Put here your function calls...
for (let index = 0; index < 3; index++) {
  console.log(addSix());
}


// The End
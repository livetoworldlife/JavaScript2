/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/
"use strict";


let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/*
let a = 10 is declared as 'let' in global scope.it can be reachable from every scope.
Then x is declared to a function as "const".
Value of the "a" variable is changed to 12 inside of the x function.
The x function returns a closure function which is alerting value of 'a'.
The closure checks the last assigned value of 'a'  and alerts it as 12.
*/


// The End
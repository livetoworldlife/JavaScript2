/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.
*/
"use strict";

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9
};


function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);


/*

When we passed "x" value as an argument of "f1" function which changed the argument's value, it did not change the “x” 's original value.
JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

However,
When we passed “y” object as an argument of “f2" function which changed the argument's key value, Also, it changed the “y” 's original key value too.
In JavaScript, object references are values.
Because of this, objects will behave like they are passed by reference:
If a function changes an object property, it changes the original value.
Changes to object properties are visible outside the function.
*/



// The End
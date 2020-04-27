/**

 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

 */
"use strict";

function removeDuplicates(arrForLetter) {

  arrForLetter.forEach((item, index, arr) => {
    if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
      arr.splice(arr.lastIndexOf(item), 1);
    }
  });

}


const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);

// I used a new condition below instead of (letters === ["a", "b", "c", "d", "e", "f"])
if (JSON.stringify(letters) === JSON.stringify(["a", "b", "c", "d", "e", "f"])) {
  console.log("Hooray!")
} else {
  console.log("Ohh Noo!!!")
}

// The End
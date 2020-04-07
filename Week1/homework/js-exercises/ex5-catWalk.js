'use strict';
/**

 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", 
 so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand
  side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), 
 keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.

*/

// Create a variable to store a reference to the img.
const img = document.getElementById('img');

let newSrc = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';
let defSrc = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
// Change the style of the img to have a "left" of "0px"
let pixelOfimg = 0;
// an increasing counter that counts every time when the function is called
let millisecond = 0;
let windowWidth = window.innerWidth;
let widthOfImg = img.width;
const totalSecondForTour = (windowWidth - widthOfImg) / 10;
//  How many times a function must be called to the cat dancing for five seconds
const countForFiveSecond = 5000 / 50; // 5000 milliseconds = 5 seconds


// Create a  function called
function catWalk() {
  // Your cat should now be moving across the screen from left to right

  img.style.left = `${pixelOfimg}px`;
  millisecond += 1;

  if (millisecond < (totalSecondForTour / 2)) {
    // that moves the cat 10 pixels to the right of where it started,
    pixelOfimg += 10;
  } else if (millisecond >= (totalSecondForTour / 2) && millisecond < (totalSecondForTour / 2 + countForFiveSecond)) {
    // However while cat is dancing, function is being called but cat doesn't move for 5 seconds 
    (img.src == defSrc) ? img.src = newSrc : pass;
  } else if (millisecond >= (totalSecondForTour / 2 + countForFiveSecond) && millisecond < (totalSecondForTour + countForFiveSecond + widthOfImg / 10)) {
    // After cat dancing is finished, cat moves again until at the end of screen
    pixelOfimg += 10;
    (img.src == newSrc) ? img.src = defSrc : pass;
  } else {
    pixelOfimg = 0;
    millisecond = 0;
  }
}

// Call that function every 50 milliseconds.
let callTime = setInterval(catWalk, 50);
window.onload = callTime;



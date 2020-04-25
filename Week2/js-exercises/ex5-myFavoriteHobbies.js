/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

"use strict";

function createHTMLList(arr) {

  // your code goes in here
  const body = document.body;
  const ul = document.createElement("ul");
  body.appendChild(ul);
  const h1 = document.createElement("h1");
  h1.innerText = "My favorite hobbies";
  h1.style.color = "red";
  body.insertBefore(h1, ul);

  const creatLiElements = arr.map(item => {
    let li = document.createElement("li");
    let text = document.createTextNode(item);
    li.appendChild(text);
    ul.appendChild(li);

  });
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

window.onload = createHTMLList(myHobbies);
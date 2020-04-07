'use strict';
/**

 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.

 */


//Change the body tag 's style so it has a font-family of "Arial, sans-serif".
const bodyTag = document.body;
bodyTag.style.fontFamily = 'Arial, sans-serif';

// Replace each of the spans(nickname, fav - food, hometown) with your own information.
const nicknameSpan = document.getElementById('nickname');
const favFoodSpan = document.getElementById('fav-food');
const hometownSpan = document.getElementById('hometown');

nicknameSpan.innerText = 'MECHUL';
favFoodSpan.innerText = 'ISKENDER';
hometownSpan.innerText = 'HENGELO';

// Iterate through each li and change the class to "list-item".
const liTem = document.getElementsByTagName('li');
for (let index = 0; index < liTem.length; index++) {
  liTem[index].className = 'list-item';
}

// Create a new img element and set its src attribute to a picture of you.Append that element to the page.
const myImg = document.createElement('img');
myImg.setAttribute('src', 'https://avatars0.githubusercontent.com/u/55538102?s=400&u=c733adcfbf8c5f83f45fd824fcdc7013f26c8efa&v=4');
const h1 = document.querySelector('h1');
bodyTag.insertBefore(myImg, h1);
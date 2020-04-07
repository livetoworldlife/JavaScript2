'use strict';
const myFavoriteQuotes = [
  {
    quote: "Als een iemand een persoon ten onrechte dood of choas in het land spreidt dan is het alsof hij de gehele mensheid gedood heeft en als iemand een leven redt is het alsof hij de gehele mensheid heeft gered.",
    author: 'Surah Al Maidah vers 32',
  },
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela'
  },
  {
    quote: "Try not to become a man of success. Rather become a man of value.",
    author: 'Albert Einstein',
  },
  {
    quote: "An unexamined life is not worth living.",
    author: 'Socrates',
  },
  {
    quote: "Minds should be enlightened with science, and hearts need to be illumined with religion.",
    author: 'Said Nursî',
  },
  {
    quote: 'I will not let anyone walk through my mind with their dirty feet.',
    author: 'Mahatma Gandhi'
  },
];

let quoteText = document.getElementById('quoteText');
let authorText = document.getElementById('author');

const btn = document.getElementById('btn');
btn.addEventListener('click', runEvent);


function runEvent() {
  let randOfQuotesIndex = Math.floor(Math.random() * myFavoriteQuotes.length);
  quoteText.innerText = myFavoriteQuotes[randOfQuotesIndex].quote;
  authorText.innerText = myFavoriteQuotes[randOfQuotesIndex].author;
}
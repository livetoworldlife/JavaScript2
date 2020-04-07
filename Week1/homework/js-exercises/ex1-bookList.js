'use strict';
/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  //  Use a `<ul>`  and `<li>` to display the books.
  const listUl = document.createElement('ul');
  // Add an `<img>` to each book that links to a URL of the book cover.
  let imageUrlList = [];
  imageUrlList[0] = 'https://i.pinimg.com/originals/16/f2/4b/16f24b770430cfffb88795afe9eea71f.jpg';
  imageUrlList[1] = 'https://i.pinimg.com/originals/98/64/43/9864437dfb220d6e780b3a0d5b2d9dda.jpg';
  imageUrlList[2] = 'https://i.pinimg.com/originals/24/72/e4/2472e42ecb38a2366519621287ddb72c.jpg';

  // Iterate through the array of books.
  for (let i = 0; i < books.length; i++) {
    // create all elements
    const listViewItem = document.createElement('li');
    // For each book, create a `<p>` element with the book title and author and append it to the page.
    const listP = document.createElement('p');
    const listImg = document.createElement('img');
    listImg.setAttribute('src', imageUrlList[i]);
    // Style
    listUl.style.display = 'flex';
    listViewItem.style.listStyleType = "none";
    listViewItem.style.margin = '20px';
    listViewItem.style.padding = '10px';
    // Change the style of the book depending on whether you have read it(green) or not(red).
    const bookIsRead = books[i].alreadyRead;
    if (bookIsRead) {
      listViewItem.style.backgroundColor = 'green';

    } else {
      listViewItem.style.backgroundColor = 'red';

    }
    // text 
    const bookTitle = books[i].title;
    const bookAuthor = books[i].author;
    const textHeader = document.createTextNode(bookTitle + "-" + bookAuthor);
    // append elements as child
    listP.appendChild(textHeader);
    listViewItem.appendChild(listP);
    listViewItem.appendChild(listImg);
    listUl.appendChild(listViewItem);

  }
  // your code goes in here, return the ul element
  return listUl;
}

const books = [{
  title: 'The Design of Everyday Things',
  author: 'Don Norman',
  alreadyRead: false
},
{
  title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
},
{
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  alreadyRead: true
}
];

let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);


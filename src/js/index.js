import { Bookshelf } from "./bookshelf.js";
import { Book } from "./book.js";

const mainSection = document.querySelector('main');
const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
let shelf = new Bookshelf();

function getBooks() {
  shelf.retrieveStorage();
  Object.values(shelf.books).forEach((book) => {
    mainSection.appendChild(bookTemplate(book));
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (title.value !== '' && author.value !== '') {
    const book = new Book(author, title, shelf, mainSection);
    mainSection.appendChild(book.template);
    shelf.addBook(book);
    title.value = '';
    author.value = '';
  } else if (title.value === '') {
    alert('What\'s the title of your book?');
  } else if (author.value === '') {
    alert('Who wrote that book?');
  }
});

window.addEventListener('load', getBooks);
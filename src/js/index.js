import Bookshelf from './bookshelf.js';
import Book from './book.js';

const mainSection = document.querySelector('main');
const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const shelf = new Bookshelf();

function getBooks() {
  shelf.retrieveStorage();
  Object.values(shelf.books).forEach((book) => {
    const oldBook = new Book(book.author, book.title, book.time);
    mainSection.appendChild(oldBook.generateTemplate(mainSection, shelf));
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const book = new Book(author.value, title.value);
  mainSection.appendChild(book.generateTemplate(mainSection, shelf));
  shelf.addBook(book);
  title.value = '';
  author.value = '';
});

window.addEventListener('load', getBooks);
import { Bookshelf } from "./bookshelf.js";
import { Book } from "./book.js";

const mainSection = document.querySelector('main');
const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
let shelf = new Bookshelf();

const bookTemplate = (newBook) => {
  const div = document.createElement('div');
  div.setAttribute('name', newBook.time);
  const book = document.createElement('span');
  book.innerHTML = newBook.title;
  const author = document.createElement('span');
  author.innerHTML = newBook.author;
  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'Remove';
  removeBtn.addEventListener('click', () => {
    mainSection.removeChild(div);
    shelf.delBook(newBook);
  });
  const br1 = document.createElement('br');
  const br2 = document.createElement('br');
  const br3 = document.createElement('br');
  const hr = document.createElement('hr');

  div.appendChild(book);
  div.appendChild(br1);
  div.appendChild(author);
  div.appendChild(br2);
  div.appendChild(removeBtn);
  div.appendChild(br3);
  div.appendChild(hr);

  return div;
};

function getBooks() {
  shelf.retrieveStorage();
  Object.values(shelf.books).forEach((book) => {
    mainSection.appendChild(bookTemplate(book));
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (title.value !== '' && author.value !== '') {
    const addBook = {
      title: title.value,
      author: author.value,
      time: new Date().getTime(),
    };
    const newBook = bookTemplate(addBook);
    mainSection.appendChild(newBook);
    shelf.addBook(addBook);
    title.value = '';
    author.value = '';
  } else if (title.value === '') {
    alert('What\'s the title of your book?');
  } else if (author.value === '') {
    alert('Who wrote that book?');
  }
});

window.addEventListener('load', getBooks);
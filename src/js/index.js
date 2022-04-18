const mainSection = document.querySelector('main');
const form = document.querySelector('#form');
let storedBooks = {};

const bookTemplate = (newBook) => {
  let div = document.createElement('div');
  div.setAttribute('name', newBook.time)
  const book = document.createElement('span');
  book.innerHTML = newBook.title;
  const author = document.createElement('span');
  author.innerHTML = newBook.author;
  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'Remove';
  removeBtn.addEventListener('click', () => {
    mainSection.removeChild(div);
    removeBook(div);
  });
  const hr = document.createElement('hr');
  const br1 = document.createElement('br');
  const br2 = document.createElement('br');
  const br3 = document.createElement('br');

  div.appendChild(book);
  div.appendChild(br1);
  div.appendChild(author);
  div.appendChild(br2);
  div.appendChild(removeBtn);
  div.appendChild(br3);
  div.appendChild(hr);

  return div;
}

function getBooks() {
  if (localStorage.getItem('stored-books') === null) {
    localStorage.setItem('stored-books', JSON.stringify(storedBooks));
  } else {
    storedBooks = JSON.parse(localStorage.getItem('stored-books'));
    for (book in storedBooks) {
      mainSection.appendChild(bookTemplate(storedBooks[book]));
    }
  }
}

function retrieveBooks() {
  storedBooks = JSON.parse(localStorage.getItem('stored-books'));
}

function updateBooks(bookHTML, book) {
  storedBooks[bookHTML.getAttribute('name')] = book;
  localStorage.setItem('stored-books', JSON.stringify(storedBooks));
}

function removeBook(book) {
  delete storedBooks[book.getAttribute('name')];
  console.log(book.getAttribute('name'));
  localStorage.setItem('stored-books', JSON.stringify(storedBooks));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let title = document.querySelector('#title');
  let author = document.querySelector('#author');

  if (title.value != '' || author.value != '') {
    let addBook = {
      title: title.value,
      author: author.value,
      time: new Date().getTime(),
    };
    let newBook = bookTemplate(addBook);
    mainSection.appendChild(newBook);
    updateBooks(newBook, addBook);

    title.value = '';
    author.value = '';
  } else {
    if (title.value == '') {
      alert('What\'s the title of your book?');
    } else if (author.value == '') {
      alert('Who wrote that book?');
    }
    return;
  } 
});

window.addEventListener('load', getBooks);
const mainSection = document.querySelector('main');
const submit = document.querySelector('#submit-btn');
let books = {};

const bookTemplate = (newBook) => {
  const div = document.createElement('div');
  div.setAttribute('name', new Date().getTime())
  const book = document.createElement('span');
  book.innerHTML = newBook.title;
  const author = document.createElement('span');
  author.innerHTML = newBook.author;
  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'Remove';
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

submit.addEventListener('click', (event) => {
  event.preventDefault();
  let newBook = bookTemplate({
    title: document.querySelector('#title').value,
     author: document.querySelector('#author').value
  });
  books[newBook.getAttribute('name')] = newBook;
  mainSection.appendChild(newBook);
  console.log(books);
});
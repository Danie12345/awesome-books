const mainSection = document.querySelector('main');
const form = document.querySelector('#form');
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
  removeBtn.addEventListener('click', () => {
    mainSection.removeChild(mainSection.querySelector('div[name="' + div.getAttribute('name') + '"]'));
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

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let title = document.querySelector('#title');
  let author = document.querySelector('#author');

  if (title.value != '' || author.value != '') {
    let newBook = bookTemplate({
      title: title.value,
      author: author.value
    });
    books[newBook.getAttribute('name')] = newBook;
    mainSection.appendChild(newBook);

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
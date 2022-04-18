const mainSection = document.querySelector('main');

const bookTemplate = (newBook) => {
  const div = document.createElement('div');
  const book = document.createElement('span');
  book.innerHTML = newBook.name;
  const author = document.createElement('span');
  author.innerHTML = newBook.author;
  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'Remove'
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

let mybook = bookTemplate({name:'lorem ipsum 3', author:'someone'})

mainSection.appendChild(mybook)
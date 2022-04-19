export default class Book {
  constructor(author, title, time = new Date().getTime()) {
    this.author = author;
    this.title = title;
    this.time = time;
  }

  getBook() {
    return this;
  }

  generateTemplate(section, shelf) {
    const div = document.createElement('div');
    div.setAttribute('name', this.time);
    const book = document.createElement('span');
    book.innerHTML = this.title + " by " + this.author;
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.addEventListener('click', () => {
      section.removeChild(div);
      shelf.delBook(this);
    });
    const div2 = document.createElement('div');

    div.appendChild(book);
    div.appendChild(div2);
    div.appendChild(removeBtn);
   
    return div;
  }
}
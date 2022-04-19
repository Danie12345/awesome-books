export class Book {
    constructor(author, title, parent, section) {
        this.author = author;
        this.title = title;
        this.time = new Date().getTime();
        this.parent = parent;
        this.section = section;
        this.template = this.generateTemplate();
    }

    getBook() {
        return this;
    }

    generateTemplate() {
        const div = document.createElement('div');
        div.setAttribute('name', this.time);
        const book = document.createElement('span');
        book.innerHTML = this.title;
        const author = document.createElement('span');
        author.innerHTML = this.author;
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'Remove';
        removeBtn.addEventListener('click', () => {
            this.section.removeChild(div);
            this.parent.delBook(this);
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
    }
}
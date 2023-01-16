import Book from './modules/book.js';
import showBook from './modules/books-display.js';

const formBtn = document.querySelector('#form-button');
const books = JSON.parse(localStorage.getItem('books'));

document.addEventListener('DOMContentLoaded', () => {
  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const id = Date.now();
    const book = new Book(id, title, author);
    book.addBook();
    if (title && author) {
      showBook(book.id, book.title, book.author);
    }
  });
});
if (books !== null) {
  books.forEach((book) => {
    showBook(book.id, book.title, book.author);
  });
}

const booksTab = document.getElementById('books-tab');
const addTab = document.getElementById('addBook-tab');
const contactTab = document.getElementById('contact-tab');
booksTab.addEventListener('click', () => {
  document.getElementById('new-book').classList.remove('hide');
  document.getElementById('addBook-form').classList.add('hide');
  document.getElementById('contact-display').classList.add('hide');
});

addTab.addEventListener('click', () => {
  document.getElementById('new-book').classList.add('hide');
  document.getElementById('addBook-form').classList.remove('hide');
  document.getElementById('contact-display').classList.add('hide');
});

contactTab.addEventListener('click', () => {
  document.getElementById('new-book').classList.add('hide');
  document.getElementById('addBook-form').classList.add('hide');
  document.getElementById('contact-display').classList.remove('hide');
});
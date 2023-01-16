import Book from './book.js';

export default (id, title, author) => {
  const booksList = document.querySelector('.books-list');
  const li = document.createElement('li');
  li.innerHTML = `<h2>"${title}"</h2>
        <h3> by ${author}</h3>`;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remove';
  li.appendChild(deleteBtn);
  booksList.appendChild(li);
  deleteBtn.addEventListener('click', () => {
    const book = new Book(id, title, author);
    id = deleteBtn.id;
    book.removeBook();
    li.remove();
  });
};

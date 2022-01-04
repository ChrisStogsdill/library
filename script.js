let myLibrary = [];
const addBookButton = document.getElementById('add-book-button')
const bookFormDropdown = document.getElementById('book-form-dropdown')
const bookFormCancel = document.getElementById('book-form-cancel')
const bookFormSubmit = document.getElementById('book-form-submit')
function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

Book.prototype.info = function() {return `${this.title}, ${this.author}, ${this.pages}, ${this.readStatus}`};

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}


addBookButton.addEventListener('click', () => {
    bookFormDropdown.style.display = 'flex';
});

bookFormCancel.addEventListener('click', () => {
    bookFormDropdown.style.display = 'none';
});

bookFormSubmit.addEventListener('click', () => {
    bookFormDropdown.style.display = 'none';
});


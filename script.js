let myLibrary = [];
const addBookButton = document.getElementById('add-book-button')
const bookFormDropdown = document.getElementById('book-form-dropdown')
const bookFormCancel = document.getElementById('book-form-cancel')
const bookFormSubmit = document.getElementById('book-form-submit')
const tableContainer = document.getElementById('table-container')
const bookForm = document.forms["book-form"];
const newDiv = document.createElement('div')
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

function formTest(event, inputText) {
    
    alert(document.forms["book-form"].title.value)
}
// Practice area where I had the form manually add the elements to the page. 
//
// bookFormDropdown.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let read = ''
//     if (parseInt(bookForm.read.value)==1) {
//         read = 'read'
//     }
//     else {
//         read = 'not read'
//     }
//     tableContainer.appendChild(document.createElement('div'));
//     tableContainer.lastElementChild.appendChild(document.createElement('div'))
//     tableContainer.lastElementChild.lastElementChild.innerText = `title: ${bookForm.title.value}`
//     tableContainer.lastElementChild.appendChild(document.createElement('div'))
//     tableContainer.lastElementChild.lastElementChild.innerText = `author: ${bookForm.author.value}`
//     tableContainer.lastElementChild.appendChild(document.createElement('div'))
//     tableContainer.lastElementChild.lastElementChild.innerText = `pages: ${bookForm.pages.value}`
//     tableContainer.lastElementChild.appendChild(document.createElement('div'))
//     tableContainer.lastElementChild.lastElementChild.innerText = `read-status: ${read}`
//     bookForm.reset();
    
// })

bookFormDropdown.addEventListener('submit', (e) => {
    e.preventDefault();
    let formBook = new Book(bookForm.title.value, bookForm.author.value, bookForm.pages.value, bookForm.read.value)
    myLibrary.push(formBook)
    bookForm.reset();
})
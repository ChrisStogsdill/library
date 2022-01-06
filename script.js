let myLibrary = [];
const addBookButton = document.getElementById('add-book-button')
const bookFormDropdown = document.getElementById('book-form-dropdown')
const bookFormCancel = document.getElementById('book-form-cancel')
const bookFormSubmit = document.getElementById('book-form-submit')
const tableContainer = document.getElementById('table-container')
const allDeleteButtons = document.querySelectorAll('.delete-button')
const bookForm = document.forms["book-form"];
const newDiv = document.createElement('div')

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

Book.prototype.toggleReadStatus = function() {
    if (this.readStatus == 'read') {
        this.readStatus = 'unread'
    }
    else {
        this.readStatus = 'read'
    }
};

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

function updateWebpageBookList () {
    // remove previous instance on the page.
    while (tableContainer.lastChild){
        tableContainer.removeChild(tableContainer.lastChild);
        }
        for (i = 0; i < myLibrary.length; i++) {
            //create a div in the tableContainer to house the set of data 
            tableContainer.appendChild(document.createElement('div'));
            // go through book entry at library index matching the loop iteration
            let bookKeys = Object.keys(myLibrary[i]);
            let bookValues = Object.values(myLibrary[i]);
            //loop through book object array. using 'p' because 'i' messed with the parent loop
            for (p = 0; p < bookKeys.length; p++) {
                //create another div INSIDE the just created div
                tableContainer.lastElementChild.appendChild(document.createElement('div'))
                //fill out the just created div with the info of the book at the index of the loop
                tableContainer.lastElementChild.lastElementChild.innerText = `${bookKeys[p]}: ${bookValues[p]}`;
            }
            //add the toggle button
            tableContainer.lastElementChild.appendChild(document.createElement('button')).innerText = 'read/unread';
            tableContainer.lastElementChild.lastElementChild.classList.add('toggle-read')
            //add the delete button
            tableContainer.lastElementChild.appendChild(document.createElement('button')).innerText = 'delete';
            tableContainer.lastElementChild.lastElementChild.classList.add('delete-button')
        }

    setupDeleteButtons()
    setupReadStatusToggle();
     
}

function setupDeleteButtons() {
   //add event listener to all delete buttons.
        //have the delete button remove the matching index of myLibrary
        for (button of document.querySelectorAll('.delete-button')) {
            button.addEventListener('click', (clickEvent) => {
                //this creates an array of all the book list divs by finding the click event target, 
                //then going 2 parents up. then uses that to find the index position that will 
                //correspond with myLibrary
                let webpageBookListArray = Array.from(clickEvent.target.parentElement.parentElement.children)
                let buttonParentIndexLocation = webpageBookListArray.indexOf(clickEvent.target.parentElement)
                myLibrary.splice(buttonParentIndexLocation, 1)
                updateWebpageBookList();
            })
        }
} 

function setupReadStatusToggle() {
    for(button of document.querySelectorAll('.toggle-read')) {
        button.addEventListener('click', (clickEvent) => {
            let webpageBookListArray = Array.from(clickEvent.target.parentElement.parentElement.children)
            let buttonParentIndexLocation = webpageBookListArray.indexOf(clickEvent.target.parentElement)
            myLibrary[buttonParentIndexLocation].toggleReadStatus()
            updateWebpageBookList();
        })
    }
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



bookFormDropdown.addEventListener('submit', (e) => {
    let readStatusConversion = '';
    if (bookForm.read.value == 1) {
        readStatusConversion = 'read'
    }
    else {
        readStatusConversion = 'unread'
    }
    e.preventDefault();
    let formBook = new Book(bookForm.title.value, bookForm.author.value, 
                            bookForm.pages.value, readStatusConversion)
    myLibrary.push(formBook)    

    updateWebpageBookList();

    bookForm.reset();
})




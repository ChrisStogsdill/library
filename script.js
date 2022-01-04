function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

Book.prototype.info = function() {return `${this.title}, ${this.author}, ${this.pages}, ${this.readStatus}`};

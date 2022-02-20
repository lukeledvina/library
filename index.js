let myLibrary = [];

function Book(author, pages, title) {
    this.author = author;
    this.pages = pages;
    this.title = title;
}

function addBookToLibrary() {
    let userTitle = prompt("Title?");
    let userAuthor = prompt("Author?");
    let userPages = prompt("How many pages?");

    myLibrary.push(new Book(userAuthor, userPages, userTitle));
}


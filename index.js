let myLibrary = [123, 123, 123, 123, 123 ];

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
    updateScreen(myLibrary);
}

let libraryContainer = document.getElementById("library-container");

function updateScreen(library) {
    for(let i = 0; i  < library.length; i++) {
        libraryContainer.appendChild(document.createElement('div')).className = "card";

        for(let key in library) {
            //put book info on card

        }
    }
}

updateScreen(myLibrary);
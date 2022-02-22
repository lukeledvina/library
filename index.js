let myLibrary = [];

function Book(author, pages, title, read) {
    this.author = author;
    this.pages = pages;
    this.title = title;
    this.read = read;
}

let userTitle;
let userAuthor;
let userPages;
let userRead;

function addBookToLibrary() {

    // This function needs to create pop-up form with input fields for each

    userTitle = prompt("Title?");
    userAuthor = prompt("Author?");
    userPages = prompt("How many pages?");
    userRead = prompt("Have you read it?");

    myLibrary.push(new Book(userAuthor, userPages, userTitle, userRead));
    updateScreen(myLibrary);
}

let libraryContainer = document.getElementById("library-container");
let currentCard;
function updateScreen(library) {
    for(let i = 0; i  < library.length; i++) {
        currentCard = libraryContainer.appendChild(document.createElement('div'));
        currentCard.className = "card";

        for(let key in library[i]) {
            //put book info on card
            console.log(`${key}: ${library[i][key]}`);
            currentCard.textContent += `${key}: ${library[i][key]} \n`;
        }
    }
}

let addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
    addBookToLibrary();
})

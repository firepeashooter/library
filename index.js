function Book(title, author, pages, read){
    if (!new.target){
        throw Error("You must use the 'new' keyword to create a book.")
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function() {
        return this.title + " by " + this.author + " has " + this.pages + " pages, and it's id is: " + this.id;
    }
}

function addBookToLibrary(title, author, pages, read) {

    book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

const myLibrary = [];


addBookToLibrary("The Dark Tower", "Steven King", 579, true);
addBookToLibrary("The Wastelands", "Steven King", 324, false);

console.log(myLibrary[0].info());
console.log(myLibrary[1].info());
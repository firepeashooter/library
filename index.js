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

bookContainer = document.querySelector(".book--container")


///A FUNCTION THAT DISPLAYS BOOK INFORMATION TO THE SCREEN
function displayBooks(library){

    

    for (let i = 0; i < library.length; i++){

        //Initializing the variables
        bookTitle = library[i].title;
        bookAuthor = library[i].author;
        bookPages = library[i].pages;
        bookRead = library[i].read;

        //Create the book card
        book = document.createElement("div");
        book.classList.add("book");

        //Add it to the book container
        bookContainer.appendChild(book);


        //Create layout for the book card
        titleContainer = document.createElement("div");
        titleContainer.classList.add("title--container");

        info = document.createElement("div");
        info.classList.add("info");

        //Add layout divs
        book.appendChild(titleContainer);
        book.appendChild(info);


        //Create the title
        title = document.createElement("h2");
        title.classList.add("title");
        title.textContent = bookTitle;


        //Create the Author p tag
        author = document.createElement("p");
        authorName = document.createElement("span");
        authorName.classList.add("subheading");
        authorName.textContent = "Author: ";

        author.appendChild(authorName);
        author.appendChild(document.createTextNode(bookAuthor));


        //Create the pages p tag
        pages = document.createElement("p");
        pagesNum = document.createElement("span");
        pagesNum.classList.add("subheading");
        pagesNum.textContent = "Pages: ";

        pages.appendChild(pagesNum);
        pages.appendChild(document.createTextNode(bookPages));


        //Create the read p tag
        read = document.createElement("p");
        readStatus = document.createElement("span");
        readStatus.classList.add("subheading");
        readStatus.textContent = "Read: ";

        read.appendChild(readStatus);
        read.appendChild(document.createTextNode(bookRead));




        //Add the componenets
        titleContainer.appendChild(title);
        info.appendChild(author);
        info.appendChild(pages);
        info.appendChild(read);

    }

}


//Create and add books to library
const myLibrary = [];
addBookToLibrary("The Dark Tower", "Steven King", 579, true);
addBookToLibrary("The Wastelands", "Steven King", 324, false);


//Display books to the bookshelf
displayBooks(myLibrary);


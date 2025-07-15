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
    displayBooks(myLibrary); //IM A LITTLE IFFY ABOUT THIS
}


bookContainer = document.querySelector(".book--container");

//Gets the bookid from the delete button pressed and then removes the entry from the array.
bookContainer.addEventListener("click", (e) => {

    if (e.target.classList.contains("delete")){
        const bookID = e.target.getAttribute("data-book-id");

        //Find the index of the book with the correct id

            //Iterate through the array and if we found the item then delete it?
        for (let i = 0; i < myLibrary.length; i++){

            if (myLibrary[i].id == bookID){
                //Remove it
                myLibrary.splice(i, 1);
                displayBooks(myLibrary);
            }
        }
    }

})


///A FUNCTION THAT DISPLAYS BOOK INFORMATION TO THE SCREEN
function displayBooks(library){

    //refresh the library
    bookContainer.innerHTML = ''; //AND IM A LITTLE IFFY ABOUT THIS TOO...

    

    for (let i = 0; i < library.length; i++){

        //Initializing the variables
        bookTitle = library[i].title;
        bookAuthor = library[i].author;
        bookPages = library[i].pages;
        bookRead = library[i].read;
        bookID = library[i].id

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

        buttons = document.createElement("div");
        buttons.classList.add("buttons");

        //Add layout divs
        book.appendChild(titleContainer);
        book.appendChild(info);
        book.appendChild(buttons);


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

        
        //Create the buttons
        readButton = document.createElement("button");
        readButton.textContent = "Toggle Read";
        readButton.classList.add("toggle--read");

        deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        //Associate delete button with book it so we can read it later when clicked
        deleteButton.setAttribute("data-book-id", bookID);


        
        //Add the componenets
        titleContainer.appendChild(title);
        info.appendChild(author);
        info.appendChild(pages);
        info.appendChild(read);
        buttons.appendChild(readButton);
        buttons.appendChild(deleteButton);

    }

}


//Create and add books to library
const myLibrary = [];
addBookToLibrary("The Dark Tower", "Steven King", 579, true);
addBookToLibrary("The Wastelands", "Steven King", 324, false);
addBookToLibrary("Dark Matter", "Blake Crouch", 276, true)





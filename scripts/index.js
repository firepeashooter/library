//A class that represents a book 
//Has a title, author, number of pages, and a boolean value if it has been read or not. 
//Id is for identificaiton

class Book{

    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    info(){
        return `${this.title} by ${this.title} has ${this.pages} pages, and it's id is ${this.id}`
    }

    toggleRead(){
        this.read = !(this.read);
    }


}


//A class that handles all of the screen components
class ScreenController{

    constructor(){
        this.myLibrary = [];
        this.bookContainer = document.querySelector(".book--container");
        this.dialog = document.querySelector("dialog");
        this.newBook = document.querySelector(".add--book");
        this.close = document.querySelector(".close");
        this.submit = document.querySelector(".submit");
        this.form = document.getElementById("newbookform");


        //Extra step to bind the things we have functions for
        this.handleBookEvents = this.handleBookEvents.bind(this);
        this.addBookFromForm = this.addBookFromForm.bind(this);
        
        this.bookContainer.addEventListener("click", this.handleBookEvents);
        this.submit.addEventListener("click", this.addBookFromForm);


        this.newBook.addEventListener("click", () => {
            this.dialog.showModal();
            this.dialog.classList.add("show");
        });

        this.close.addEventListener("click", () => {
            this.form.reset();
            this.dialog.close();
            this.dialog.classList.remove("show");
        });

    }

    displayBooks(){

        //refresh the library
        this.bookContainer.innerHTML = '';

        //Display the library
        for (let i = 0; i < this.myLibrary.length; i++){

            //Initializing the variables
            let bookTitle = this.myLibrary[i].title;
            let bookAuthor = this.myLibrary[i].author;
            let bookPages = this.myLibrary[i].pages;
            let bookRead = this.myLibrary[i].read;
            let bookID = this.myLibrary[i].id;

            //Create the book card
            let book = document.createElement("div");
            book.classList.add("book");

            //Add it to the book container
            this.bookContainer.appendChild(book);


            //Create layout for the book card
            let titleContainer = document.createElement("div");
            titleContainer.classList.add("title--container");

            let info = document.createElement("div");
            info.classList.add("info");

            let buttons = document.createElement("div");
            buttons.classList.add("buttons");

            //Add layout divs
            book.appendChild(titleContainer);
            book.appendChild(info);
            book.appendChild(buttons);


            //Create the title
            let title = document.createElement("h2");
            title.classList.add("title");
            title.textContent = bookTitle;


            //Create the Author p tag
            let author = document.createElement("p");
            let authorName = document.createElement("span");
            authorName.classList.add("subheading");
            authorName.textContent = "Author: ";

            author.appendChild(authorName);
            author.appendChild(document.createTextNode(bookAuthor));


            //Create the pages p tag
            let pages = document.createElement("p");
            let pagesNum = document.createElement("span");
            pagesNum.classList.add("subheading");
            pagesNum.textContent = "Pages: ";

            pages.appendChild(pagesNum);
            pages.appendChild(document.createTextNode(bookPages));


            //Create the read p tag
            let read = document.createElement("p");
            let readStatus = document.createElement("span");
            readStatus.classList.add("subheading");
            readStatus.textContent = "Read: ";

            read.appendChild(readStatus);
            read.appendChild(document.createTextNode(bookRead));

            
            //Create the buttons
            let readButton = document.createElement("button");
            readButton.textContent = "Toggle Read";
            readButton.classList.add("toggle--read");
            //Associate read button with book so we can read it later when clicked
            readButton.setAttribute("data-book-id", bookID);

            let deleteButton = document.createElement("button");
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

    addBookToLibrary(title, author, pages, read){
        let newBook = new Book(title, author, pages, read);
        this.myLibrary.push(newBook);
        this.displayBooks();
    }

    handleBookEvents(e){
        //Grabs the associated book id with 
        const bookID = e.target.getAttribute("data-book-id");

        console.log(e);

        //If delete button is pressed
        if (e.target.classList.contains("delete")){

            //Find the index of the book with the correct id

            //Iterate through the array and if we found the item then delete it?
            for (let i = 0; i < this.myLibrary.length; i++){

                if (this.myLibrary[i].id == bookID){
                    //Remove it
                    this.myLibrary.splice(i, 1);
                    this.displayBooks();
                }
            }

        //If the read button is pressed
        } else if (e.target.classList.contains("toggle--read")){

            for (let i = 0; i < this.myLibrary.length; i++){
                
                //Iterate through the library to find the book
                if (this.myLibrary[i].id == bookID){
                    //toggle read
                    this.myLibrary[i].toggleRead();
                    this.displayBooks();
                }
            }

        }

    }

    addBookFromForm(e){

        e.preventDefault();

        if (this.form.checkValidity()){ //Checking if the form is valid
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData.entries());
        
            this.addBookToLibrary(data.title, data.author, data.pages, data.read);
        
            this.form.reset();
            this.dialog.close();
            this.dialog.classList.remove("show");

        } else{
            this.form.reportValidity();
            return;
        }
    }
}


controller = new ScreenController();

//Inital Book
controller.addBookToLibrary("The Dark Tower", "Steven King", 579, true);






const dialogue = document.querySelector("dialog");
const newBook = document.querySelector(".add--book");
const close = document.querySelector(".close");
const submit = document.querySelector(".submit");
const form = document.getElementById("newbookform");


newBook.addEventListener("click", () => {
    dialogue.showModal();
    dialogue.classList.add("show");
});


close.addEventListener("click", () => {
    form.reset();
    dialogue.close();
    dialogue.classList.remove("show");

});

submit.addEventListener("click", (e) => {

    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());


    addBookToLibrary(data.title, data.author, data.pages, data.read);


    form.reset();
    dialogue.close();
    dialogue.classList.remove("show");

})
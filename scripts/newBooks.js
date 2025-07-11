const dialogue = document.querySelector("dialog");
const newBook = document.querySelector(".add--book");
const close = document.querySelector(".close");

newBook.addEventListener("click", () => {
    dialogue.showModal();
});


close.addEventListener("click", () => {
    dialogue.close();
});
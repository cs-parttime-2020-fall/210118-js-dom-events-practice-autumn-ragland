console.log(`21 01 18 JS DOM Events Practice`);

// select form elements
let title = document.querySelector("#title");
// console.log(title);
let author = document.querySelector("#author");
// console.log(author);
let submitBtn = document.querySelector("button");
// console.log(submitBtn);
// select book list
let bookList = document.querySelector("#bookList");
// console.log(bookList);

// function to handel event submission
submitForm = (event) => {
    event.preventDefault();
    bookList.innerHTML = bookList.innerHTML + `<div>Title : ${title.value} - Author : ${author.value}`

    title.value = "";
    author.value = "";
}

submitBtn.addEventListener("click", submitForm);
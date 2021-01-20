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
    event.preventDefault(); // prevent page from reloading

    // check that form fields are returning what I expect
    console.log(title.value);
    console.log(author.value);

    // append new form submission to display element
    bookList.innerHTML = bookList.innerHTML + `<div>Title : ${title.value} - Author : ${author.value}`;

    // clear form fields
    title.value = "";
    author.value = "";
}

// add handler for click event to append values
submitBtn.addEventListener("click", submitForm);
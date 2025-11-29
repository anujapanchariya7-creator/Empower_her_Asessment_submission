// 1. Select <h1> by id and change text
const heading = document.getElementById("main-heading");
heading.textContent = "Welcome to the DOM World!";

// 2. Select all <p> and make them blue
const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "blue";
}

// 3. Select first .container div and change background
const containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";

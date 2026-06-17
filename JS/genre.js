const params = new URLSearchParams(window.location.search);
const genre = params.get("genre");

const title = document.getElementById("genreTitle");
title.textContent = genre + " Books";

const container = document.getElementById("booksContainer");
document.title=(genre)
const filteredBooks = books.filter(book => book.genre === genre);
container.innerHTML = filteredBooks.map(book => `
    <div class="col">
        <div class="card h-100 text-center shadow-sm">
            <img src="${book.image}" class="card-img-top">
            <div class="card-body">
                <h6 class="card-title">${book.title}</h6>
            </div>
        </div>
    </div>
`).join("");
const genreCards = document.querySelectorAll(".genre-card");

genreCards.forEach(card => {

    card.addEventListener("click", () => {

        const genre = card.dataset.genre;

        window.location.href = `genre.html?genre=${encodeURIComponent(genre)}`;

    });

});
function normalize(str) {
  return str.trim().toLowerCase();
}
const input=document.getElementById("searchInput");
const searchButton=document.getElementById("searchBtn");
const container = document.getElementById("booksContainer");
searchButton.addEventListener('click',()=>{
const filteredBooks = books.filter(book => normalize(book.author) === normalize(input.value) 
|| normalize(book.title) === normalize(input.value) );
container.innerHTML = filteredBooks.map(book => `
    <div class="col">
        <div class="card h-100 text-center shadow-sm">
            <img src="${book.image}" class="card-img-top book-img">
            <div class="card-body">
                <h6 class="card-title">${book.title}</h6>
            </div>
        </div>
    </div>
`).join("")
}
);
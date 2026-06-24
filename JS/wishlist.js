const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const allBooks = [...books, ...uniqueBooks];

const wishlistBooks = allBooks.filter(book =>
    wishlist.includes(book.title)
);

console.log("Matching books:", wishlistBooks);

const container = document.getElementById("wishlistContainer");

if (wishlistBooks.length === 0) {
    container.innerHTML = "<p>Nothing here. Add books to your wishlist.</p>";
} else {
    container.innerHTML = wishlistBooks.map(book => `
        <div class="col">
        <a href="about.html?title=${encodeURIComponent(book.title)}">
        <div class="card h-100 text-center shadow-sm">
            <img src="${book.image}" class="card-img-top book-img">
            <div class="card-body">
                <h6 class="card-title">${book.title}</h6>
            </div>
        </div>
        </a>
    </div>
`).join("");
}
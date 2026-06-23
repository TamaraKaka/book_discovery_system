const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistBooks = books.filter(book =>
    wishlist.includes(book.title)
);

const container = document.getElementById("wishlistContainer");

if (wishlistBooks.length === 0) {
    container.innerHTML = "<p>Nothing here. Add books to your wishlist.</p>";
} else {
    container.innerHTML = wishlistBooks.map(book => `
        <div class="col-md-4 mb-3">
            <div class="card h-100">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p>${book.author}</p>

                    <a href="about.html?title=${encodeURIComponent(book.title)}"
                       class="btn btn-primary">
                       View Book
                    </a>
                </div>
            </div>
        </div>
    `).join("");
}
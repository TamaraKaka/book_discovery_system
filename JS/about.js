const parameters = new URLSearchParams(window.location.search);
const bookTitle = parameters.get("title");

const container = document.getElementById("bookContainer");

document.title = bookTitle;

function normalize(str) {
    return str.trim().toLowerCase();
}

const book = books.find(book =>
    normalize(book.title) === normalize(bookTitle)
);

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const isWishlisted = wishlist.includes(book.title);

function saveWishlist() {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function addToWishlist(bookTitle) {
    if (!wishlist.includes(bookTitle)) {
        wishlist.push(bookTitle);
        saveWishlist();
    }
}

function toggleWishlist(bookTitle, button) {
    if (wishlist.includes(bookTitle)) {
        wishlist = wishlist.filter(b => b !== bookTitle);
    } else {
        wishlist.push(bookTitle);
    }

    saveWishlist();

    const isNowWishlisted = wishlist.includes(bookTitle);

    button.textContent = isNowWishlisted
        ? "❤️ Remove from Wishlist"
        : "♡ Add To Wishlist";
}

container.innerHTML = `
<div class="book-container">
    <img src="${book.image}" alt="${book.title}">

    <div>
        <h1 class="card-title">${book.title}</h1>
        <h2>${book.author}</h2>

        <h3>Summary:</h3>
        <p>${book.synopsis}</p>

        <h3>Interesting Fact:</h3>
        <p>${book.fact}</p>

        <button id="wishlistBtn">
            ${isWishlisted ? "❤️ Remove from Wishlist" : "♡ Add To Wishlist"}
        </button>
    </div>
</div>
`;

const wishlistBtn = document.getElementById("wishlistBtn");

wishlistBtn.addEventListener("click", () => {
    toggleWishlist(book.title, wishlistBtn);
});

document.getElementById("backBtn").addEventListener("click", () => {
    window.history.back();
});
const params = new URLSearchParams(window.location.search);
const title = params.get("title");

const container = document.getElementById("bookContainer");

document.title = title;
function normalize(str) {
  return str.trim().toLowerCase();
}
const book = books.find(book => normalize(book.title) === normalize(title));
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const isWishlisted = wishlist.includes(book.title);

function saveWishlist(){
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
function addToWishlist(title){
    if(!wishlist.includes(title)){
        wishlist.push(title);
        saveWishlist();
    }
}
function toggleWishlist(title, button) {
    if (wishlist.includes(title)) {
        wishlist = wishlist.filter(b => b !== title);
    } else {
        wishlist.push(title);
    }

    saveWishlist();

    // re-check state after update
    const isNowWishlisted = wishlist.includes(title);

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
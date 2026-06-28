document.getElementById("spinBtn").addEventListener("click", () => {

    const genre = genreSelect.value;
    const filtered = getFilteredBooks(genre);

    if (filtered.length === 0) {
        result.innerHTML = "<p>No books found.</p>";
        return;
    }

    let spinCount = 0;

    const finalBook =
        filtered[Math.floor(Math.random() * filtered.length)];

    const spinInterval = setInterval(() => {

        const randomBook =
            filtered[Math.floor(Math.random() * filtered.length)];

        result.innerHTML = `
            <div class="card">
                <h3>${randomBook.title}</h3>
                <p>${randomBook.author}</p>
            </div>
        `;

        spinCount++;

        if (spinCount > 20) {

            clearInterval(spinInterval);

            setTimeout(() => {

                const isWishlisted =
                    wishlist.includes(finalBook.title);

                result.innerHTML = `
                    <div class="cardFinal">
                        <h2>Your Pick</h2>

                        <img
                            src="${finalBook.image}"
                            class="card-img-top book-img"
                            alt="${finalBook.title}"
                        >

                        <h3>${finalBook.title}</h3>
                        <p>${finalBook.author}</p>
                        <p>${finalBook.fact}</p>

                        <button id="wishlistBtn">
                            ${isWishlisted
                                ? "❤️ Remove from Wishlist"
                                : "♡ Add To Wishlist"}
                        </button>
                    </div>
                `;

                const wishlistBtn =
                    document.getElementById("wishlistBtn");

                wishlistBtn.addEventListener("click", () => {
                    toggleWishlist(finalBook.title, wishlistBtn);
                });

            }, 500);
        }

    }, 80);

});
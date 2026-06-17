const genreCards = document.querySelectorAll(".genre-card");

genreCards.forEach(card => {

    card.addEventListener("click", () => {

        const genre = card.dataset.genre;

        window.location.href = `genre.html?genre=${encodeURIComponent(genre)}`;

    });

});
const books = [

   {
    title: "The Goblin Emperor",
    author: "Katherine Addison",
    genre: "fantasy",
    fact: "A kind, political fantasy story where the protagonist is unexpectedly thrown into ruling an empire.",
    image: "images/books/goblin-emperor.jpg"
  },
  {
    title: "Jonathan Strange & Mr Norrell",
    author: "Susanna Clarke",
    genre: "fantasy",
    fact: "Takes place in an alternate 19th-century England where magic is real but rare and academic.",
    image: "images/books/jonathan-strange.jpg"
  },

  {
    title: "Blindsight",
    author: "Peter Watts",
    genre: "scifi",
    fact: "Explores whether consciousness is actually necessary for intelligence.",
    image: "images/books/blindsight.jpg"
  },
  {
    title: "House of Suns",
    author: "Alastair Reynolds",
    genre: "scifi",
    fact: "Set in a future where human clones spread across galaxies over millions of years.",
    image: "images/books/suns.jpg"
  },

  {
    title: "The Secret History",
    author: "Donna Tartt",
    genre: "mystery",
    fact: "A group of students commit a murder and slowly unravel psychologically.",
    image: "images/books/secret-history.jpg"
  },
  {
    title: "In the Woods",
    author: "Tana French",
    genre: "mystery",
    fact: "A detective investigates a murder that may be connected to his own childhood trauma.",
    image: "images/books/woods.jpg"
  },

  {
    title: "We Were Liars",
    author: "E. Lockhart",
    genre: "young adult",
    fact: "Known for its twist ending that completely reframes the story.",
    image: "images/books/liars.jpg"
  },
  {
    title: "The Raven Boys",
    author: "Maggie Stiefvater",
    genre: "young adult",
    fact: "A mix of psychic visions, ancient kings, and a magical quest to find a sleeping Welsh king.",
    image: "images/books/raven-boys.jpg"
  },


  {
    title: "The Chronology of Water",
    author: "Lidia Yuknavitch",
    genre: "memoir",
    fact: "A raw, nonlinear memoir about trauma, swimming, and rebuilding identity through writing.",
    image: "images/books/chronology.jpg"
  },
  {
    title: "A Ghost in the Throat",
    author: "Doireann Ní Ghríofa",
    genre: "memoir",
    fact: "Blends memoir with literary obsession over a 1700s Irish poem written by a grieving mother.",
    image: "images/books/ghost.jpg"
  },

  {
    title: "Steppenwolf",
    author: "Hermann Hesse",
    genre: "classics",
    fact: "A psychological novel exploring dual identity and inner conflict.",
    image: "images/books/steppenwolf.jpg"
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "classics",
    fact: "A man stays young while a hidden portrait reflects his moral decay.",
    image: "images/books/dorian-gray.jpg"
  }
];


const result = document.getElementById("result");
const genreSelect = document.getElementById("genreSelect");

function getFilteredBooks(genre) {
    return books.filter(book => book.genre === genre);
}
document.getElementById("spinBtn").addEventListener("click", () => {
    const genre = genreSelect.value;
    const filtered = getFilteredBooks(genre);

    if (filtered.length === 0) {
        result.innerHTML = "<p>No books found.</p>";
        return;
    }

    let spinInterval;
    let spinCount = 0;

    // final book (true result)
    const finalBook = filtered[Math.floor(Math.random() * filtered.length)];

    spinInterval = setInterval(() => {
        const randomBook = filtered[Math.floor(Math.random() * filtered.length)];

        result.innerHTML = `
            <div class="card">
                <h3>${randomBook.title}</h3>
                <p>${randomBook.author}</p>
            </div>
        `;

        spinCount++;

        // slowdown effect
        if (spinCount > 20) {
            clearInterval(spinInterval);

            // final reveal after slight pause
            setTimeout(() => {
                result.innerHTML = `
                    <div class="cardFinal">
                        <h2> Your Pick</h2>
                        <h3>${finalBook.title}</h3>
                        <p>${finalBook.author}</p>
                        <p>${finalBook.fact}</p>
                    </div>
                `;
            }, 500);
        }
    }, 80);
});
const uniqueBooks = [

  {
    title: "The Goblin Emperor",
    author: "Katherine Addison",
    genre: "fantasy",
    synopsis: "After the sudden deaths of his father and brothers, the neglected half-goblin Maia unexpectedly becomes emperor. He must navigate deadly court politics while trying to rule with kindness and integrity.",
    fact: "A kind, political fantasy story where the protagonist is unexpectedly thrown into ruling an empire.",
    image: "images/books/goblin-emperor.jpg"
  },
  {
    title: "Jonathan Strange & Mr Norrell",
    author: "Susanna Clarke",
    genre: "fantasy",
    synopsis: "In an alternate 19th-century England, two very different magicians revive the practice of English magic. Their partnership slowly turns into a dangerous rivalry with supernatural consequences.",
    fact: "Takes place in an alternate 19th-century England where magic is real but rare and academic.",
    image: "images/books/jonathan-strange.jpg"
  },

  {
    title: "Blindsight",
    author: "Peter Watts",
    genre: "scifi",
    synopsis: "A crew of specialists is sent to investigate an alien presence at the edge of the Solar System. What they discover challenges humanity's understanding of intelligence and consciousness.",
    fact: "Explores whether consciousness is actually necessary for intelligence.",
    image: "images/books/blindsight.jpg"
  },
  {
    title: "House of Suns",
    author: "Alastair Reynolds",
    genre: "scifi",
    synopsis: "Two members of a clone family reunite after thousands of years of traveling the galaxy, only to discover that someone is hunting them. Their search for answers uncovers secrets spanning millions of years.",
    fact: "Set in a future where human clones spread across galaxies over millions of years.",
    image: "images/books/suns.jpg"
  },

  {
    title: "The Secret History",
    author: "Donna Tartt",
    genre: "mystery",
    synopsis: "A group of elite university students become involved in a murder after their obsession with ancient Greek ideals spirals out of control. The novel explores guilt, friendship, and moral corruption.",
    fact: "A group of students commit a murder and slowly unravel psychologically.",
    image: "images/books/secret-history.jpg"
  },
  {
    title: "In the Woods",
    author: "Tana French",
    genre: "mystery",
    synopsis: "Detective Rob Ryan investigates the murder of a young girl in the same woods where his childhood friends disappeared years earlier. The case forces him to confront memories he'd rather forget.",
    fact: "A detective investigates a murder that may be connected to his own childhood trauma.",
    image: "images/books/woods.jpg"
  },

  {
    title: "We Were Liars",
    author: "E. Lockhart",
    genre: "young adult",
    synopsis: "Cadence Sinclair returns to her wealthy family's private island after a mysterious accident leaves her with memory loss. As she pieces together the truth, shocking secrets emerge.",
    fact: "Known for its twist ending that completely reframes the story.",
    image: "images/books/liars.jpg"
  },
  {
    title: "The Raven Boys",
    author: "Maggie Stiefvater",
    genre: "young adult",
    synopsis: "Blue Sargent joins four boys from an elite school on a quest to find a legendary sleeping king. Along the way, they encounter ancient magic, prophecy, and unexpected friendships.",
    fact: "A mix of psychic visions, ancient kings, and a magical quest to find a sleeping Welsh king.",
    image: "images/books/raven-boys.jpg"
  },

  {
    title: "The Chronology of Water",
    author: "Lidia Yuknavitch",
    genre: "memoir",
    synopsis: "Through a series of nonlinear memories, Yuknavitch recounts her experiences with abuse, addiction, motherhood, and finding healing through writing. It's an unconventional and deeply personal memoir.",
    fact: "A raw, nonlinear memoir about trauma, swimming, and rebuilding identity through writing.",
    image: "images/books/chronology.jpg"
  },
  {
    title: "A Ghost in the Throat",
    author: "Doireann Ní Ghríofa",
    genre: "memoir",
    synopsis: "The author becomes fascinated with an eighteenth-century Irish poem and its creator, weaving together literary history with reflections on motherhood, identity, and obsession.",
    fact: "Blends memoir with literary obsession over a 1700s Irish poem written by a grieving mother.",
    image: "images/books/ghost.jpg"
  },

  {
    title: "Steppenwolf",
    author: "Hermann Hesse",
    genre: "classics",
    synopsis: "Harry Haller struggles with feeling divided between his civilized self and his wild instincts. His journey becomes a surreal exploration of identity, loneliness, and self-discovery.",
    fact: "A psychological novel exploring dual identity and inner conflict.",
    image: "images/books/steppenwolf.jpg"
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "classics",
    synopsis: "After wishing to remain forever young, Dorian Gray discovers that a portrait of himself bears the consequences of his immoral actions instead. His pursuit of pleasure comes at a terrible cost.",
    fact: "A man stays young while a hidden portrait reflects his moral decay.",
    image: "images/books/dorian-gray.jpg"
  }

];

const result = document.getElementById("result");
const genreSelect = document.getElementById("genreSelect");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
function saveWishlist() {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function toggleWishlist(title, button) {

    if (wishlist.includes(title)) {
        wishlist = wishlist.filter(bookTitle => bookTitle !== title);
    } else {
        wishlist.push(title);
    }

    saveWishlist();

    const isWishlisted = wishlist.includes(title);

    button.textContent = isWishlisted
        ? "❤️ Remove from Wishlist"
        : "♡ Add To Wishlist";
}

function getFilteredBooks(genre) {
    return uniqueBooks.filter(book => book.genre === genre);
}


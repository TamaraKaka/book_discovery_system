const params = new URLSearchParams(window.location.search);
const title = params.get("title");

const container = document.getElementById("bookContainer");

document.title = title;
function normalize(str) {
  return str.trim().toLowerCase();
}
const book = books.find(book => normalize(book.title) === normalize(title));

container.innerHTML = `
    <div>
        <div >
            <img src="${book.image}" >
            <div>
                <h1 class="card-title">${book.title}</h1>
                <h2>${book.author}</h2><br>
                <h3>Summary: </h3><p>${book.synopsis}</p><br>
                <h3>Interesting Fact: </h3><p>${book.fact}</p>
                <button>Add To Wishlist</button>
            </div>
        </div>
    </div>
`;
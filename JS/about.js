const params = new URLSearchParams(window.location.search);
const title = params.get("title");

const container = document.getElementById("bookContainer");

document.title = title;
function normalize(str) {
  return str.trim().toLowerCase();
}
const book = books.find(book => normalize(book.title) === normalize(title));

container.innerHTML = `
    <div class="col">
        <div class="card h-100 text-center shadow-sm">
            <img src="${book.image}" class="card-img-top book-img">
            <div class="card-body">
                <h2 class="card-title">${book.title}</h2>
                <h3>${book.author}</h3>
                <h3>Summary: ${book.synopsis}</h3>
                <h3>Interesting Fact: ${book.fact}</h3>
            </div>
        </div>
    </div>
`;
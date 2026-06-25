let bio=document.getElementById("floatingTextarea2");
let count=document.getElementById("count");

bio.addEventListener("input", () => {
    count.textContent = `${bio.value.length}/200`;
});
let bio=document.getElementById("floatingTextarea2");
let count=document.getElementById("count");
let form=document.getElementById("contactForm");


bio.addEventListener("input", () => {
    count.textContent = `${bio.value.length}/200`;
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("message").textContent =
        "✓ Thank you for your feedback!";

    setTimeout(() => {
        form.reset();
        document.getElementById("message").textContent = "";
         count.textContent = `${bio.value.length}/200`;
    }, 2000);
});
form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("message").textContent =
        "✓ Thank you for your feedback!";

    setTimeout(() => {
        form.reset();
    }, 2000);
});
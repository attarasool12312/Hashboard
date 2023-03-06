ClassicEditor.create(document.querySelector("#editor"));

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(document.getElementById("editor").value);
});
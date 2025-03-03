export function loadHeader() {
    fetch("./components/header/header.html")
    .then(response => response.text())
    .then(headerTemplate => {
        document.getElementById("header").innerHTML = headerTemplate;
    })
    .catch(error => console.error("Error loading header:", error));
}

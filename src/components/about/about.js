  
export function loadAbout() {
    fetch("./components/about/about.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("about-section").innerHTML = data;
        });
}
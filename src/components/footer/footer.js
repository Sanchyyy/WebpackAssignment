  
export function loadFooter() {
    fetch("./components/footer/footer.html") 
        .then(response => response.text())
        .then(footerTemplate => {
            document.getElementById("footer").innerHTML = footerTemplate;
        })
        .catch(error => console.error("Error loading footer:", error));
}

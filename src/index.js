import './style.scss';
import { loadHeader } from './components/header/header.js';
import { loadFooter } from './components/footer/footer.js';
import { loadContact } from './pages/contact/contact.js';
import { loadAbout } from './components/about/about.js';






document.addEventListener('DOMContentLoaded', () => {
  loadHeader(); 
  loadFooter();
});




const route =(event)=>{
  event=event||window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocation();


};
const routes ={
  "/"  :"./pages/home/home.html",
  "/home"  :"./pages/home/home.html",
  "/about" :"./components/about/about.html",
  "/contact" :"./pages/contact/contact.html",
}

const handleLocation=async()=>{
  const path =window.location.pathname;
  const route =routes[path] || null;
  if (!route) {
    document.getElementById('app').innerHTML = `<h1>404 - Page Not Found</h1>`;
    return;
  }
try {
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('app').innerHTML = html;
    if(path === "/contact"){
      loadContact();
    }
    else  if (path === "/" || path === "/home") {
      document.getElementById('app').innerHTML = html;

      const aboutContainer = document.createElement("div");
      aboutContainer.id = "about-section";
      document.getElementById('app').appendChild(aboutContainer);
      loadAbout(); 
    } 
  } catch (error) {
    document.getElementById('app').innerHTML = `<h1>Error Loading Page</h1>`;
  }

};


window.route=route;

window.addEventListener('popstate', handleLocation);
handleLocation()


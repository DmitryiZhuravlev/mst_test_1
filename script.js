let blurHeader = () => {
  let header = document.querySelector("header");
  this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header"); 
}
window.addEventListener('scroll', blurHeader);
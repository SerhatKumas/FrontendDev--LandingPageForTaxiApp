const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

//Adding event listener
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

//Menu closing function
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
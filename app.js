
// Hamburger menu click settings
const hamburgerMenu = document.querySelector(".nav__hamburger");
const dropdownMenu = document.querySelector(".nav__menu");
const dropdownMenuLinks = document.querySelectorAll(".nav__menu-link");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
console.log(overlay);
let menuIsActive = false;

hamburgerMenu.addEventListener("click", () => {
    if(!menuIsActive) {
        dropdownMenu.style.display = "flex";
        overlay.style.display = "block";
        body.style.overflowY = "hidden";
        hamburgerMenu.src = "./images/icon-close.svg";
        menuIsActive = true;
    } else {
        dropdownMenu.style.display = "none";
        overlay.style.display = "none";
        body.style.overflowY = "visible";
        hamburgerMenu.src = "./images/icon-hamburger.svg";
        menuIsActive = false;
    }
})

dropdownMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        dropdownMenu.style.display = "none";
        overlay.style.display = "none";
        body.style.overflowY = "visible";
        menuIsActive = false;
    })
})


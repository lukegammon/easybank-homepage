const heroBg = document.querySelector(".hero__bg");
window.addEventListener("resize", (e) => {
        if(window.innerWidth > 1000) {
            heroBg.src = "./images/bg-intro-desktop.svg";
        }
})
const hamburger = document.querySelector(".fa-fas");
const hiddenUL = document.querySelector("ul");

hamburger.addEventListener("click", () => {
hiddenUL.classList.toggle("main");
});

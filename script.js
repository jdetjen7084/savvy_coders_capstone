const hamburger = document.querySelector("nav span");
const hiddenUL = document.querySelector("ul");

console.log(hamburger)

hamburger.addEventListener("click", () => {
hiddenUL.classList.toggle(".main");
});

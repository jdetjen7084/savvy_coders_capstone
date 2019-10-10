// Hamburger Functionality below

const hamburger = document.querySelector("nav span");
const hiddenUL = document.querySelector("ul");

console.log(hamburger)

hamburger.addEventListener("click", () => {
hiddenUL.classList.toggle(".main");
});

// Age Verif Card Info below

const flexDiv = document.querySelector("#flex-div");
const ageVerifCard = document.querySelector(".age-verif-card");
const label = document.querySelector(".label");
const ageSelect = document.querySelector("#age-select");
const blank = document.querySelector("#blank");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const enter = document.querySelector("#enter");
const cardIMG = document.querySelector(".card-img");

// setTimeout(() => open(over21), 2000);
open(over21);

function over21(Question, Choose, Yes, No, Enter, photo) {
  return `<div class="age-verif-card">
       <label for="age-verif" class="label">${Question}</label>
      <select name="verif" id="age-select">
        <option id="blank" value="">${Choose}</option>
        <option id="yes" value="yes">${Yes}</option>
        <option id="no" value="no">${No}</option>
       </select>
       <figure>
         <img src=${photo} alt="" class="card-img">
       </figure>
        <div>
      <a href="#" id="enter">${Enter}</a>
    </div>
       </div>`
}

flexDiv.innerHTML += over21("Are you over 21?", "--Choose--", "Yes", "No", "Enter", "https://images.app.goo.gl/33FQNjM7FVXpPxzg9");




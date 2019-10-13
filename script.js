// Hamburger Functionality below

const hamburger = document.querySelector("nav span");
const hiddenUL = document.querySelector("ul");

console.log(hamburger)

hamburger.addEventListener("click", () => {
hiddenUL.classList.toggle(".main");
});

// Age Verif Card Info below
//const made if necessary for later
const flexDiv = document.querySelector("#flex-div");
const ageVerifCard = document.querySelector(".age-verif-card");
const label = document.querySelector(".label");
const ageSelect = document.querySelector("#age-select");
const blank = document.querySelector("#blank");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const enter = document.querySelector("#enter");

// setTimeout(() => open(over21), 2000);

function over21(Question, Choose, Yes, No, Enter) {
  return `<div class="age-card">
       <label for="age-verif" class="label">${Question}</label>
      <select name="verif" id="age-select">
        <option id="blank" value="">${Choose}</option>
        <option id="yes" value="yes">${Yes}</option>
        <option id="no" value="no">${No}</option>
       </select>
    <div>
      <a href="#" id="enter">${Enter}</a>
    </div>
       </div>`
}

//flexDiv.innerHTML += over21("Are you over 21?", "--Choose--", "Yes", "No", "Enter");

window.onload = function() {
  flexDiv.innerHTML += over21("Are you over 21?", "--Choose--", "Yes", "No", "Enter");
}

//Enter button functionality below
enter.addEventListener("click", function() {
  if (document.getElementById("age-select") === no) {
    return ageDenied.innerHTML += tooYoung("Sorry, you are too young for this page.")
  } else {
    return document.prompt("Have a lot of fun!")
  }
})

//Age Denied card below

const ageDenied = document.querySelector("#card-age-denied");
const sorry = document.querySelector("#sorry");

function tooYoung(sorry) {
  return `<div class="age-card">
    <h3 id="sorry">${sorry}</h3>
  </div>`
}

// ageDenied.innerHTML += tooYoung("Sorry, you are too young for this page.")



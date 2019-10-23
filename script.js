// Hamburger Functionality below

const hamburger = document.querySelector("nav span");
const hiddenUL = document.querySelector("ul");

console.log(hamburger)

hamburger.addEventListener("click", () => {
hiddenUL.classList.toggle(".main");
});

// // Age Verif Card Info below
// //const made if necessary for later
// const flexDiv = document.querySelector("#over21card");
// const ageVerifCard = document.querySelector(".age-verif-card");
// const label = document.querySelector(".label");
// const ageSelect = document.querySelector("#age-select");
// const blank = document.querySelector("#blank");
// const yes = document.querySelector("#yes");
// const no = document.querySelector("#no");
// const enter = document.getElementById("enter");

// // setTimeout(() => open(over21), 2000);

// function over21(Question, Choose, Yes, No, Enter) {
//   return `<div class="age-card">
//        <label for="age-verif" class="label">${Question}</label>
//       <select name="verif" id="age-select">
//         <option id="blank" value="">${Choose}</option>
//         <option id="yes" value="yes">${Yes}</option>
//         <option id="no" value="no">${No}</option>
//        </select>
//     <div>
//       <button id="enter" type="button>${Enter}</button>
//     </div>
//        </div>`
// }

// window.onload = () => flexDiv.innerHTML += over21("Are you over 21?", "--Choose--", "Yes", "No", "Enter");

// //Age Denied card below
// const ageDenied = document.querySelector("#card-age-denied");
// const sorry = document.querySelector("#sorry");

// //Enter button functionality below
// enter.addEventListener("click", function() {
//   if (document.getElementById("age-select") === no) {
//     return ageDenied.innerHTML += tooYoung("Sorry, you are too young for this page.")
//   } else {
//     return document.prompt("Have a lot of fun!")
//   }
// });


// //checkAge(age){
//   //return (age > 21 ? "good to go | NO YOURE UNDER 21 YOU TODDLER)"
// //}
// function tooYoung(sorry) {
//   return `<div class="age-card">
//     <h3 id="sorry">${sorry}</h3>
//   </div>`
// }


// // ageDenied.innerHTML += tooYoung("Sorry, you are too young for this page.")

const over21card = document.querySelector("#over21card");
const ageVerifCard = document.querySelector(".age-verif-card");
const label = document.querySelector(".label");
const enter = document.querySelector("#enter");

function over21(label) {
  return `
<form>
<div class="age-verif-card">
  <label id="label">${label} <input type="text" name="age"></label>
  <input type="button" onclick="checkAge(this)" id ="enter" value="Submit">
  <p id="answer"></p>
</div>
</form>`
}

window.onload = () => over21card.innerHTML += over21("Enter your age:");

function checkAge(button) {
  const form = button.form;
  let result = document.getElementById("answer");
  result.innerHTML = form.age.value >= 21 ? 'Have a lot of fun!' :
   'Sorry, you are not old enough.';
}


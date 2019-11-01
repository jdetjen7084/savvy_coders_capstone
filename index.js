import { Nav, Main, Footer } from "./components";
import * as state from "./store";

//import axios from "axios";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(location.origin);

function render(st = state.Home) {
    document.querySelector("#root").innerHTML = `
    ${Nav()}
    ${Main(st)}
    ${Footer()}
  `;
  router.updatePageLinks();
}

//render()

router
  .on(":page", params => {
    render(
    state[
    capitalize(params.page)]
  )
    })
  .on("/", () => render())
  .resolve();

//Search button
const button = document.getElementById("search");

button.addEventListener("click", () =>


  console.log("This button is clicked!")
)





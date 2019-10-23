import { Nav, Main, Footer } from "./components";
import * as state from "./store";

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Nav()}
    ${Main(st)}
    ${Footer()}
  `;
}
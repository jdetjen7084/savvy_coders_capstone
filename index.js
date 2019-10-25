import { Nav, Main, Footer } from "./components";
import * as state from "./store";

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

router
  .on(":page", params =>
  render(
    state[
    capitalize(params.page)]
  )
  )
  .on("/", () => render())
  .resolve();


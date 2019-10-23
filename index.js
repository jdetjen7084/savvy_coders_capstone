import { Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import axios from "axios";
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


  // BELOW IS FROM IN CLASS PROJECT TO IMPORT BLOG POSTS

  // axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then(response => {
  //     state.Blog.main = response.data.map(
  //       ({title, body}) => `
  //       <article>
  //         <h2>${title}</h2>
  //         <p>${body}</p>
  //       </article>
  //     `
  //     ).join("");
  //     if (router.lastRouteResolved().params && capitalize(router.lastRouteResolved().params.page === "Blog")){
  //       render(state.Blog);
  //     }
  //     console.log(router.lastRouteResolved());
  //   })
  //   .catch(err => console.log(err));

import { Nav, Main, Footer } from "./components";
import * as state from "./store";
import { db } from "./firebase";

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
  .on(":page", params => {
    render(state[capitalize(params.page)]);
  })
  .on("/", () => {
    render();
    document
      .querySelector("#brewery-list")
      .addEventListener("change", event => {
        console.log(event.target.value);
        const breweryList = state.BeerData;
        const target = breweryList.filter(
          brewery => event.target.value in brewery
        );
        console.log(target);
      });

    document.querySelector("#beer-list").addEventListener("change", event => {
      const beerList = state.BeerData.results;
      const beerTarget = beerList.filter(beer => event.target.value in beer);
      console.log(beerTarget);
      // state.Home.beersToDisplay = beerTarget;
      // console.log(state.Home.beersToDisplay)
    });
  })
  .resolve();

  console.log(state.BeerData.results);

//Search button will go here when available


//database query
const query = db.ref("beer").orderByKey();

query.once("value").then(snapShot => {
  snapShot.forEach(childSnapshot => {
    const childData = childSnapshot.val();
    state.BeerData.results.push(childData);
  });
});

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

  // const currentPage = router.lastRouteResolved().url;

  // if (currentPage === "" || currentPage === "/Home") {
  //   //"This code only runs on the homepage"

  //   document.querySelector("#brewery-list").addEventListener('change', (e) => {
  //     const beers = state.BeerData;
  //     const targetBrewery = e.target.value;

  //     const breweryResult = beers.filter(beer => beer.brewery === targetBrewery);
  //     //console.log(breweryResult)

  //     state.Home.beersToDisplay = breweryResult
  //     render(state.Home)
  //   })

  //   document.querySelector("#beer-list").addEventListener('change', (e) => {
  //       //console.log(e.target.value)

  //   })
  //}

}

router
  .on(":page", params => {
    render(
    state[
    capitalize(params.page)]
      )
    })
  .on("/", () => {
    render();
    //document.querySelector("#brewery-list").addEventListener('change', (e) => {
      // const beers = state.BeerData;
      // const targetBrewery = e.target.value;

      // const breweryResult = beers.filter(beer => beer.brewery === targetBrewery);
      // //console.log(breweryResult)

      // state.Home.beersToDisplay = breweryResult
      // render(state.Home)

    document.querySelector("#brewery-list").addEventListener('change', (event) => {
      console.log(event.target.value);
      const breweryList = state.BeerData;
      const target = breweryList.filter(brewery => event.target.value in brewery);
      //console.log(target)
      })



    document.querySelector("#beer-list").addEventListener('change', (event) => {
      const beerList = state.BeerData;
      const beerTarget = beerList.filter(beer => event.target.value in beer);
      console.log(beerTarget)
    })
  }
)
  .resolve();

//Search button
const button = document.getElementById("search");

button.addEventListener("click", () =>

  console.log("This button is clicked!")
)



//database query
const query = db.ref("beer").orderByKey();

  query.once("value").then(snapShot => {
    snapShot.forEach(childSnapshot => {
      const childData = childSnapshot.val();
      state.BeerData.push(childData);
    });
  })

console.log(state.BeerData)




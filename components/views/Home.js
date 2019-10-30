//import imgBeerHeader from '../docs/IMG/beer_header.jpg';

function generateBeerList(beers) {
  return beers.map(beer => `<li>${beer}</li>`).join(" ");
}

function generateBrewList(breweries) {
  return breweries.map(brewery => `<li>${brewery}</li>`).join(" ");
}

export default st => `
<div class="selection">
<label for="select-brewery">Brewery:</label>
  <select id="brewery-list>
  <option value="">--Choose a Brewery--</option>
    ${generateBrewList(st.breweries)}
  </select>
</div>
<div class="selection">
  <label for="select-style">Style:</label>
  <select id="beer-list>
  <option value="">--Choose a Beer Style--</option>
    ${generateBeerList(st.beers)}
  </select>
</div>
<div class="search">
  <input id="search" type="button" value="Search">
</div>
`
;


//   <ul>
//   ${generateBeerList(st.beers)}
//   </ul>
//   <ul>
//   ${generateBrewList(st.breweries)}
//  </ul>



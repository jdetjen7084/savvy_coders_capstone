
import imgBeerHeader from '../../docs/IMG/beer_header.jpg'

function generateBeerList(beers) {
  return beers.map(beer => `<option>${beer}</option>`).join(" ");
}

function generateBrewList(breweries) {
  return breweries.map(brewery => `<option>${brewery}</option>`).join(" ");
}

function generateResult(results) {
  return `<p>${results}<p>`
}



export default st => `
<img id="image" src="${imgBeerHeader}"></img>
<h1>Seasonal Beer Search</h1>
<div class="selection">
<label for="select-brewery">Brewery:</label>
  <select id="brewery-list">
  <option value="">--Choose a Brewery--</option>
    ${generateBrewList(st.breweries)}
  </select>
</div>
<div class="selection">
  <label for="select-style">Style:</label>
  <select id="beer-list">
  <option value="">--Choose a Beer Style--</option>
    ${generateBeerList(st.beers)}
  </select>
</div>
<div class="search">
  <input id="search" type="button" value="Search">
</div>

`
;
  // {<div>
  //   ${generateResult(st.results)}
  //   </div>}

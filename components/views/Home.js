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
    <option>${generateBrewList(st.breweries)}</option>
  </select>
</div>
<div class="selection">
  <label for="select-style">Style:</label>
  <select id="beer-list>
    <option>${generateBeerList(st.beers)}</option>
  </select>
</div>
<div class="search">
  <input id="search" type="button" value="Search">
</div>
`;

//   <ul>
//   ${generateBeerList(st.beers)}
//   </ul>
//   <ul>
//   ${generateBrewList(st.breweries)}
//  </ul>


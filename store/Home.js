
// import { BeersDropdown } from '../components';
import BeersDropdown from '../components/BeersDropdown';
import imgBeerHeader from '../docs/IMG/beer_header.jpg';

export default {
  main: `
  <div id="over21card">
  </div>
  <div id="card-age-denied">
  </div>
  <figure class="hero">
          <img id="image"
          src="${imgBeerHeader}"
          alt="beer" width="75%" height="75%">
    <h1>Seasonal Beer Search</h1>
  </figure>
  <main>
    <div class="selection">
    <label for="select-brewery">Brewery:</label>
    <select id="brewery-list>
    <option value="">--Choose a Brewery--</option>
    <option value="Schlafly">Schlafly</option>
    <option value="Urban Chestnut">Urban Chestnut</option>
    <option value="4 Hands">4 Hands</option>
    <option value="Civil Life">Civil Life</option>
    <option value="Modern">Modern</option>
    <option value="2nd Shift">2nd Shift</opt>
    <option value="Square One">Square One</option>
      </select>
    </div>
    <div class="selection">
      ${BeersDropdown}
    </div>
    <div class="search">
      <input id="search" type="button" value="Search">
    </div>
  </main>


  `
}

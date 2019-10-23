export default {
  main: `
  <nav class="nav">
      <span class="nav-toggle fas fa-bars">
          <!-- <i class="fas fa-bars"></i> -->
      </span>
    <ul class="main is-hidden--mobile">
      <li class="link"><a href="./index.html">Home</a></li>
      <li class="link"><a href="./list/">List</a></li>
      <li class="link"> <a href="./contact/">Contact</a></li>
    </ul>
  </nav>
  <div id="over21card">
  </div>
  <div id="card-age-denied">
  </div>
  <figure class="hero">
          <img id="image"
          src="./docs/IMG/beer_header.jpg"
          alt="beer" width="75%" height="75%">
    <h1>Seasonal Beer Search</h1>
  </figure>
  <main>
    <div class="selection">
      <label for="select-brewery">Brewery:</label>
        <select>
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
      <label for="select-style">Style:</label>
        <select>
          <option value="">--Choose a Beer Style--</option>
          <option value="Pumpkin">Pumpkin</option>
          <option value="Imperial Pumpkin">Imperial Pumpkin</option>
          <option value="Marzen">Märzen</option>
          <option value="Summer Ale">Summer Ale</option>
          <option value="Winter Lager">Winter Lager</option>
          <option value="Irish Stout">Irish Stout</option>
          <option value="Coffee Stout">Coffee Stout</option>
        </select>
    </div>
    <div class="search">
      <input type="search" value="Search">
    </div>
  </main>

  <script src="./script.js"></script>
  `
}

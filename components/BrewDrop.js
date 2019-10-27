export default () => {

  let brewerySelect = document.getElementById("brewery-list"),
  brewArr = ["--Choose a Brewery--", "Schlafly", "Urban Chestnut", "4 Hands", "Civil Life", "Modern Brewery", "2nd Shift", "Square One"];

  for (let i = 0; i < brewArr.length; i++) {
  let brewOption = document.createElement("option"),
      txt = document.createTextNode(brewArr[i]);
  brewOption.appendChild(txt);
  brewOption.setAttribute("value",brewArr[i]);
  brewerySelect.insertBefore(brewOption,brewerySelect.lastChild);
  }

}


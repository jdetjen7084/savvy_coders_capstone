export default () => {

  let beerSelect = document.getElementById("beer-list"),
  beerArr = ["--Choose a Style--", "Pupkin", "Märzen", "Summer Ale", "Winter Lager"];

  for (let i = 0; i < beerArr.length; i++) {
  let beerOption = document.createElement("option"),
      txt = document.createTextNode(beerArr[i]);

  beerOption.appendChild(txt);
  beerOption.setAttribute("value",beerArr[i]);
  beerSelect.insertBefore(beerOption, beerSelect.lastChild);
  }

}

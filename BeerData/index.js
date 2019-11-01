import { db } from "../firebase";

export default () => {
  let firebaseData = [];
  let breweries = [];
  const query = db.ref("beer").orderByKey();
  //console.log(query);
  query.once("value").then(snapShot =>
    {
      snapShot.forEach(childSnapshot => {
        const childData = childSnapshot.val();
        //console.log(childData);
        // breweries.push(childData);
        firebaseData.push(childData)
      })
    }
    )
    console.log(breweries)
    breweries = firebaseData.filter(beer => {
      beer.brewery === "Schlafly";
    }).map(beer => beer)
    console.log(breweries)
    console.log(firebaseData)
}

import { db } from "../firebase";

export default () => {
  let firebaseData = [];
  let breweries = [];
  const query = db.ref("beer").orderByKey();

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
    breweries = firebaseData.filter(beer => {
      beer.brewery === "Schlafly";
    }).map(beer => beer);
}



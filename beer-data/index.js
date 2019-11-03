import { db } from "../firebase";

export default () => {
  let firebaseData = [];
  const query = db.ref("beer").orderByKey();

  query.once("value").then(snapShot => {
    snapShot.forEach(childSnapshot => {
      const childData = childSnapshot.val();
      firebaseData.push(childData);
    });
  })
};

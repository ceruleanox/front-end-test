import firebase from 'firebase'

var firebaseConfig = {

};
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;
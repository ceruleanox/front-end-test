import firebase from 'firebase'

var firebaseConfig = {
  // comment

};
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;
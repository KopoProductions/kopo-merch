import firebase from 'firebase/app';
import 'firebase/firestore';

const config ={
  apiKey: "AIzaSyAGLHhzaXU1IKyqz--b_xS0vz_S3aPBNPg",
  authDomain: "kopomerch.firebaseapp.com",
  databaseURL: "https://kopomerch.firebaseio.com",
  projectId: "kopomerch",
  storageBucket: "kopomerch.appspot.com",
  messagingSenderId: "204861559392",
  appId: "1:204861559392:web:e2f61d8791dd00c949a905",
  measurementId: "G-FBFCZ6KN1R"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
}
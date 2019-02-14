import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyAsW4I_7I8pPNvyPvyO0x-wZF56FLfllYs",
  authDomain: "iceverge-plan.firebaseapp.com",
  databaseURL: "https://iceverge-plan.firebaseio.com",
  projectId: "iceverge-plan",
  storageBucket: "iceverge-plan.appspot.com",
  messagingSenderId: "848486987046"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;
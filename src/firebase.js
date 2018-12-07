import firebase from 'firebase'
import 'firebase/firestore'

var config = {
  apiKey: 'AIzaSyC1uebqsJQI_GhWfEIsanB32eAr1RtGAp4',
  authDomain: 'sound-player-810f1.firebaseapp.com',
  databaseURL: 'https://sound-player-810f1.firebaseio.com',
  projectId: 'sound-player-810f1',
  storageBucket: 'sound-player-810f1.appspot.com',
  messagingSenderId: '3486261857'

}

firebase.initializeApp(config)

export default firebase

import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyCz7fF9r4Dssj7LkH7mfmBgmjmaTZKPZIA",
    authDomain: "vue-chat-7975e.firebaseapp.com",
    databaseURL: "https://vue-chat-7975e.firebaseio.com",
    projectId: "vue-chat-7975e",
    storageBucket: "vue-chat-7975e.appspot.com",
    messagingSenderId: "235585995315"
  };
  const firebaseApp = firebase.initializeApp(config);
  
  // maybe comment this one out
  firebaseApp.firestore().settings({ timestampsInSnapshots: true})

  export default firebase.firestore()
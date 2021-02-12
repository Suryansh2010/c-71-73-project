import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCQCdMG9tSig23SFBICV9LzewzsrlZmMHk",
    authDomain: "storyhub-c87c1.firebaseapp.com",
    projectId: "storyhub-c87c1",
    storageBucket: "storyhub-c87c1.appspot.com",
    messagingSenderId: "472736601727",
    appId: "1:472736601727:web:ba86a03132653bb8fa914a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()
import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {

    const config = {
        apiKey: "AIzaSyBzrNbIzFJyAfF8sJZZa3KXBezGhBHFttg",
        authDomain: "book-store-test.firebaseapp.com",
        databaseURL: "https://book-store-test.firebaseio.com",
        projectId: "book-store-test",
        storageBucket: "book-store-test.appspot.com",
        messagingSenderId: "598703862101",
        appId: "1:598703862101:web:8c65c649bf92f381"
      };

    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}

const fireDb = firebase.firestore()

export {fireDb}
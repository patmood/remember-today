import * as firebase from 'firebase/firebase-browser'
import firebaseConfig from '../firebase-config.json'

class FirebaseApi {
  static initAuth() {
    firebase.initializeApp(firebaseConfig)
    return new Promise((resolve, reject) => {
      const unsub = firebase.auth().onAuthStateChanged(
        user => {
          unsub()
          resolve(user)
        },
        error => reject(error)
      )
    })
  }

  static createUserWithEmailAndPassword(user) {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  }

  static signInWithEmailAndPassword(user) {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  }

  static authSignOut(){
    return firebase.auth().signOut()
  }

  static databasePush(path) {
    return firebase
      .database()
      .ref(path)
      .push()
  }

  static getValueByKeyOnce(path, key) {
    return firebase
      .database()
      .ref(path)
      .orderByKey()
      .equalTo(key)
      .once('value')
  }

  static getChildAddedByKeyOnce(path, key) {
    return firebase
      .database()
      .ref(path)
      .orderByKey()
      .equalTo(key)
      .once('child_added')
  }

  static databaseSet(path, value) {
    return firebase
      .database()
      .ref(path)
      .set(value)
  }

}

export default FirebaseApi
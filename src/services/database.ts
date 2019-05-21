import { db } from '../config/firebase'
import firebase from '@firebase/app'

class DatabaseService {
  static async setRegistration(email) {
    console.log(db)
    return db.collection('registrations').doc().set({
      email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }
}

export default DatabaseService

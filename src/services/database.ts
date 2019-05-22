import firebase from 'firebase/app'
import { db } from '../config/firebase'

class DatabaseService {
  static async setRegistration(email) {
    return db.collection('registrations').doc().set({
      email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }
}

export default DatabaseService

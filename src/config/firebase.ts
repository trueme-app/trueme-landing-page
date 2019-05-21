import firebase from '@firebase/app'
import '@firebase/firestore'

interface IConfig {
  apiKey: string,
  authDomain: string,
  databaseURL: string,
  projectId: string,
}

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'trueme-be19e.firebaseapp.com',
  databaseURL: 'https://trueme-be19e.firebaseio.com',
  projectId: 'trueme-be19e',
  storageBucket: 'trueme-be19e.appspot.com',
  messagingSenderId: '163436224599',
  appId: '1:163436224599:web:ed224cfa9e2b38c4'
};

firebase.initializeApp(config);

export const db = firebase.firestore();

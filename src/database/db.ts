import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

// Get a Firestore instance
const app = firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY || '',
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "619001418589",
  appId: "1:619001418589:web:9d998e954b1dd1de670eb4"
})

export const auth = firebase.auth(app)

export const firestore = app.firestore()

export const functions = firebase.functions(app)


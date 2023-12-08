import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAmZhxR248RuD810xLMGmf5ZqHC4b85t4w',
  authDomain: 'e-commerce-app-9bcbb.firebaseapp.com',
  projectId: 'e-commerce-app-9bcbb',
  storageBucket: 'e-commerce-app-9bcbb.appspot.com',
  messagingSenderId: '584342207535',
  appId: '1:584342207535:web:b26387e72805b177cd1ada',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }

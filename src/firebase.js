import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	//Config data
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }

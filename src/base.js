import Rebase from 're-base'
import Firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC0Zmyuet43K-pHBJhgIXfvHAKuoroZHP8",
  authDomain: "thatconference-e515b.firebaseapp.com",
  databaseURL: "https://thatconference-e515b.firebaseio.com"
}

const firebaseApp = Firebase.initializeApp(firebaseConfig)
const base = Rebase.createClass(firebaseApp.database())
export default base

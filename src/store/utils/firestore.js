import { firestore } from 'firebase'
import 'firebase/firestore'

var firestoreInstance = null;

export const db = () => {
  if (!firestoreInstance)
    firestoreInstance = firestore()
  return firestoreInstance;
}

export default {
    db
}
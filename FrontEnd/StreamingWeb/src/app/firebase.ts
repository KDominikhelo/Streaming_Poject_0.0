import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Firebase inicializálása
const firebaseConfig = {
  // A Firebase konfigurációs beállítások itt helyezkednek el
};

firebase.initializeApp(firebaseConfig);

export default firebase;

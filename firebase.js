import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC4AU40o1hLJs5WMyD5mo3krHUVbRVDT5Q',
  authDomain: 'twitter-clone-f9f62.firebaseapp.com',
  projectId: 'twitter-clone-f9f62',
  storageBucket: 'twitter-clone-f9f62.appspot.com',
  messagingSenderId: '304137895272',
  appId: '1:304137895272:web:439355d0906476b629eadd',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

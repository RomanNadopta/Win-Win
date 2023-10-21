import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_WEB3_API_KEY,

  authDomain: import.meta.env.VITE_WEB3_AUTH_DOMAIN,

  projectId: import.meta.env.VITE_WEB3_PROJECT_ID,

  storageBucket: import.meta.env.VITE_WEB3_STORAGE_BUCKET,

  messagingSenderId: import.meta.env.VITE_WEB3_MESSAGING_SENDER_ID,

  appId: import.meta.env.VITE_WEB3_APP_ID,
};

initializeApp(firebaseConfig);
const db = getFirestore();

export default db;

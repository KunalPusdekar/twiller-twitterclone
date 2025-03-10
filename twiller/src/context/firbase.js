
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIRGn4g33YBlIm0Hmr61rEwoQDlvoQZn8",
  authDomain: "twitter-674e8.firebaseapp.com",
  projectId: "twitter-674e8",
  storageBucket: "twitter-674e8.firebasestorage.app",
  messagingSenderId: "999538759452",
  appId: "1:999538759452:web:4c123703d4d17214e60cd9",
  measurementId: "G-PS66GLWD64"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
// const analytics = getAnalytics(app);

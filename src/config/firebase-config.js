import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAOFsdOzF4kiEmWsnB8-pMclpqOpTxL3QA",
    authDomain: "liber-login.firebaseapp.com",
    projectId: "liber-login",
    storageBucket: "liber-login.appspot.com",
    messagingSenderId: "456964637729",
    appId: "1:456964637729:web:952f7f65d0a1ea57fe4f60",
};

const firebaseApp =  initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
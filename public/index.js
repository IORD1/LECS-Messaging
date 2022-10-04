
alert("staring import for app.js");
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import {
  getFirestore,collection,addDoc,doc,setDoc,getDocs
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
import {
getAuth,
GoogleAuthProvider,
signInWithRedirect,
getRedirectResult,
signInWithPopup,
signOut
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
alert("imported for app,");

function sendtext(){
    console.log("clicked");
  }


import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js';
import { getAuth, onAuthStateChanged,GoogleAuthProvider,signInWithPopup} from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js';
import { getFirestore,collection,getDocs,getDoc } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js';

const firebaseapp = initializeApp({
    apiKey: "AIzaSyAbEc5jQBHJ22W0Oe69Foh_kXH9iSGaf38",
    authDomain: "lecs-messaging.firebaseapp.com",
    projectId: "lecs-messaging",
    storageBucket: "lecs-messaging.appspot.com",
    messagingSenderId: "539453436104",
    appId: "1:539453436104:web:e0a5a4e793f40b04f4f5fd"
  
});

const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);
// db.collection('todos').getDocs();
// const todoCol = collection(db,'todos'); 
// const snapshots = await getDocs(todoCol);



//detect auth state

onAuthStateChanged(auth,user => {

    if (user) {
        // signed in

        document.getElementById("whenSignedIn").hidden = false;
        document.getElementById("whenSignedOut").hidden = true;
        document.getElementById("userDetails").innerHTML = `<p>Hello ${user.displayName.split(" ")[0]} !</p> `;
        document.getElementById("userdp").src = user.photoURL;

    } else {
        // not signed in
        document.getElementById("whenSignedIn").hidden = true;
        document.getElementById("whenSignedOut").hidden = false;
        document.getElementById("userDetails").innerHTML = '';
    }
});
const provider = new GoogleAuthProvider(firebaseapp);

googleBtn.addEventListener('click', (e) => {

console.log('initiating login process');
signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // name = displayName
  // email = email
  // photo = photoURL

  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
  alert(errorMessage);
});
});


document.getElementById("signOutBtn").onclick = () => auth.signOut();

console.log("reading docs");
const querySnapshot = await getDocs(collection(db, "test"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(`${doc.id} => ${doc.data()}`);
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// function sendtext(){
//   document.getElementById("display").innerHTML = 'sended text';
// }

//   try {
//       const docRef = await addDoc(collection(db, "test"), {
//       sender : 'pratham'
//         });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
// // Add a new document in collection "cities"



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        
// import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
// import {
//   getFirestore,collection,addDoc,doc,setDoc,getDocs
// } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
// import {
// getAuth,
// GoogleAuthProvider,
// signInWithRedirect,
// getRedirectResult,
// signInWithPopup,
// signOut
// } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
// console.log("imported");


// // // Initialize Firebase

// // Required for side-effects
// const firebaseConfig = { 
//   apiKey: "AIzaSyAbEc5jQBHJ22W0Oe69Foh_kXH9iSGaf38",
//   authDomain: "lecs-messaging.firebaseapp.com",
//   projectId: "lecs-messaging",
//   storageBucket: "lecs-messaging.appspot.com",
//   messagingSenderId: "539453436104",
//   appId: "1:539453436104:web:e0a5a4e793f40b04f4f5fd"
//   };
//   console.log("firebase config done");

//   const app = initializeApp(firebaseConfig);
//   const provider = new GoogleAuthProvider(app);
//   const auth = getAuth(app);


// console.log("adding eventlistner for button")

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

// googleBtn.addEventListener('click', (e) => {

// console.log('initiating login process');
// signInWithPopup(auth, provider)
// .then((result) => {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   const credential = GoogleAuthProvider.credentialFromResult(result);
//   const token = credential.accessToken;
//   // The signed-in user info.
//   const user = result.user;
//   // name = displayName
//   // email = email
//   // photo = photoURL

//   // ...
// }).catch((error) => {
//   // Handle Errors here.
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // The email of the user's account used.
//   const email = error.email;
//   // The AuthCredential type that was used.
//   const credential = GoogleAuthProvider.credentialFromError(error);
//   // ...
//   alert(errorMessage);
// });
// });
// console.log('5');

// auth.onAuthStateChanged(user => {
// if (user) {
// // signed in
// document.getElementById("whenSignedIn").hidden = false;
// document.getElementById("whenSignedOut").hidden = true;
// document.getElementById("userDetails").innerHTML = `<p>Hello ${user.displayName.split(" ")[0]} !</p> `;
// document.getElementById("userdp").src = user.photoURL;

// } else {
// // not signed in
// document.getElementById("whenSignedIn").hidden = true;
// document.getElementById("whenSignedOut").hidden = false;
// document.getElementById("userDetails").innerHTML = '';
// }
// });






// try {
//     const docRef = await addDoc(collection(db, "test"), {
//     sender : user.displayName
//       });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// Add a new document in collection "cities"

//  document.getElementById("send").onclick = sendtext();


//   function sendtext(){
//     var user = auth.currentUser;
//     alert();
//     console.log(user.displayName);
//     var inputext = document.getElementById("sendinput").value;
//     console.log(user.displayName,'=>',inputext);
//   }

//   console.log(user);
//   console.log(user.displayName);
//     const docRef = await addDoc(collection(db, "test"), {
//     name: "yook",
//     sendern:user.displayName

// });
// const querySnapshot = await getDocs(collection(db, "test"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.data().sendern, " => ", doc.data().name);
// });





// document.getElementById("signOutBtn").onclick = () => auth.signOut();

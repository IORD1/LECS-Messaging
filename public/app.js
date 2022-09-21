

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e) => {
    setTimeout(()=>{
        splash.classList.add('display-none');
    },1000);
})

document.getElementById("#googleBtn").onclick = 

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAbEc5jQBHJ22W0Oe69Foh_kXH9iSGaf38",
  authDomain: "lecs-messaging.firebaseapp.com",
  projectId: "lecs-messaging",
  storageBucket: "lecs-messaging.appspot.com",
  messagingSenderId: "539453436104",
  appId: "1:539453436104:web:e0a5a4e793f40b04f4f5fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);


document.getElementById("#googleBtn").addEventListener('click', (e) => {


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

      alert(user.displayName);
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

auth.onAuthStateChanged(user => {
  if (user) {
    // signed in
    document.getElementById("whenSignedIn").hidden = false;
    document.getElementById("whenSignedOut").hidden = true;
    document.getElementById("userDetails").innerHTML = `<p>Hello ${user.displayName.split(" ")[0]} !</p> `;
    document.getElementById("userdp").src = user.photoURL;
    console.log(user);
  } else {
    // not signed in
    document.getElementById("whenSignedIn").hidden = true;
    document.getElementById("whenSignedOut").hidden = false;
    document.getElementById("userDetails").innerHTML = '';
  }
});

function func(){
  alert();
}
document.getElementById("signOutBtn").onclick = () => auth.signOut();


















// var theme =  Math.floor(Math.random() * 16777215).toString(16);
// var url = 'https://www.thecolorapi.com/scheme?hex=' + theme;
// fetch(url)
// .then(function (response) {
// // The API call was successful!
// return response.json();
// })
// .then(function (data) {
// // This is the JSON from our response
// console.log(data);    
// document.getElementById("p1").style.color = data.colors[0].hex.value; 
// document.getElementById("p2").style.color = data.colors[0].hex.value; 
// document.getElementById("p3").style.color = data.colors[0].hex.value; 
// document.getElementById("p4").style.color = data.colors[0].hex.value;  
// document.getElementById("googleBtn").style.backgroundColor = data.colors[1].hex.value;  
// document.getElementById("box").style.backgroundColor = data.colors[3].hex.value;  
// document.getElementById("googleBtn").style.color = data.colors[0].hex.value;  


// document.getElementById("head").style.backgroundColor = data.colors[4].hex.value;  
// // document.getElementById("text").innerHTML = data.content;
// // document.getElementById("author").innerHTML = data.author;
// }).catch(function (err) {
// // There was an error
// console.warn('Something went wrong.', err);
// });
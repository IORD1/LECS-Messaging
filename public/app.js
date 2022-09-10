// ///// User Authentication /////

const auth = getAuth();
alert("authed");

// const whenSignedIn = document.getElementById('whenSignedIn');
// const whenSignedOut = document.getElementById('whenSignedOut');

// const signInBtn = document.getElementById('signInBtn');
// const signOutBtn = document.getElementById('signOutBtn');

// const userDetails = document.getElementById('userDetails');


// const provider = new firebase.auth.GoogleAuthProvider();

// /// Sign in event handlers


// signInBtn.onclick = () => auth.signInWithPopup(provider);

// signOutBtn.onclick = () => auth.signOut();

// signInWithPopup(auth, provider)
//   .then((result) => {

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

  function func(){
    alert("func here");
    
  }
// var firebase = require("firebase/app");
console.log("firebase");

// Initialize Firebase
var app = {
  apiKey: "AIzaSyCvT55qbatIH6Gx8Mn2Ns4Ujx3v2t7RdQA",
  authDomain: "styrax-47f13.firebaseapp.com",
  databaseURL: "https://styrax-47f13.firebaseio.com",
  projectId: "styrax-47f13",
  storageBucket: "styrax-47f13.appspot.com",
  messagingSenderId: "524300593780"
};
firebase.initializeApp(app);

document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      alert(user);
    } else {
      alert("not logged in");
    }
  });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
  } catch (e) {
    console.error(e);
  }
});

function handleSignUp() {
  let email = document.getElementById('reg_email').value;
  let password = document.getElementById('reg_password').value;

  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  // Sign in with email and pass.
  // [START createwithemail]
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
    var user = firebase.auth().currentUser;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END createwithemail]
}

function handleLogin() {
  let email = document.getElementById('login_email').value;
  let password = document.getElementById('login_password').value;

  firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
    console.log("login successful");
    loggedIn = true;
    alert("login successful");
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('login unsuccessful');
    alert(errorCode, errorMessage);
    console.log(errorCode);
    console.log(errorMessage);
  });
}

function handleLogout() {
  firebase.auth().signOut().then(function() {
    loggedIn = false;
    console.log("logout successful");
    alert('logout success');
  }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    alert('logout failed')
    console.log(errorCode);
    console.log(errorMessage);
  });
}

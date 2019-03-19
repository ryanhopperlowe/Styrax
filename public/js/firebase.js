// var firebase = require("firebase/app");
console.log("firebase");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCvT55qbatIH6Gx8Mn2Ns4Ujx3v2t7RdQA",
  authDomain: "styrax-47f13.firebaseapp.com",
  databaseURL: "https://styrax-47f13.firebaseio.com",
  projectId: "styrax-47f13",
  storageBucket: "styrax-47f13.appspot.com",
  messagingSenderId: "524300593780"
};
firebase.initializeApp(config);

document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      window.alert(user);
    } else {
      console.log("not logged in");
    }
    window.alert(firebase.auth().currentUser);
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
    window.alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    window.alert('Please enter a password.');
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
      window.alert('The password is too weak.');
    } else {
      window.alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END createwithemail]
}

function handleLogin() {
  // window.alert("login run");
  let email = document.getElementById('login_email').value;
  let password = document.getElementById('login_password').value;

  firebase.auth().signInWithEmailAndPassword(email, password).then(function(success) {
    window.alert(success);
    window.alert("login success");
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      window.alert('Wrong password.');
    } else {
      window.alert(errorMessage);
    }
    console.log(error);
  });
}

function handleLogout() {
  firebase.auth().signOut().then(function() {
    console.log("logout successful");
    window.alert('logout success');
  }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    window.alert('logout failed')
    console.log(errorCode);
    console.log(errorMessage);
  });
}

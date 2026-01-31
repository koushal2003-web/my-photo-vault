import { initializeApp } from 
"https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword,
createUserWithEmailAndPassword, signOut } from 
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// 🔴 ADD YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyD6w8yrDCP1yWxVPg40XX6l1eYkbInN0v0",
  authDomain: "myphotovault-f23db.firebaseapp.com",
  projectId: "myphotovault-f23db",
  storageBucket: "myphotovault-f23db.appspot.com",
  messagingSenderId: "954071160337",
  appId: "1:954071160337:web:be0d3dbb0c5b873b9a43b0"
};

  // Initialize Firebase



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function() {
  signInWithEmailAndPassword(auth,
    email.value, password.value)
  .then(() => {
    login.style.display="none";
    dashboard.style.display="block";
  })
  .catch(alert);
}

window.signup = function() {
  createUserWithEmailAndPassword(auth,
    email.value, password.value)
  .catch(alert);
}

window.logout = function() {
  signOut(auth);
  location.reload();
}

import { initializeApp } from 
"https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword,
createUserWithEmailAndPassword, signOut } from 
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// 🔴 ADD YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  projectId: "PASTE_HERE"
};

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
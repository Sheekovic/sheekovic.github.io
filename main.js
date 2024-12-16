// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnzRojHjTeb1e_enXi6YWMse7X6w0vPXo",
  authDomain: "sheeko-github.firebaseapp.com",
  projectId: "sheeko-github",
  storageBucket: "sheeko-github.firebasestorage.app",
  messagingSenderId: "77160038597",
  appId: "1:77160038597:web:964aa0a9b4a426ffcc30ac",
  measurementId: "G-3E4W2ESB42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
auth.languageCode = 'en';
const analytics = getAnalytics(app);
const githubSignUpButton = document.getElementById('github-signup');
githubSignUpButton.addEventListener('click', function(){
  signInWithPopup(auth, githubProvider)
  .then((response) => {
    console.log(response.user)
  })
  .catch((error) => {
    console.log(error)
  })
})

// Import Firebase SDKs and your Firebase configuration
import { auth } from './assets/js/firebase-config.js';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// Providers
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
auth.languageCode = 'en';

// Handle Sign-In
document.addEventListener('DOMContentLoaded', () => {
  // GitHub Sign-In
  document.getElementById('github-signup').addEventListener('click', () => {
    signInWithPopup(auth, githubProvider)
      .then(response => updateUI(response.user))
      .catch(error => console.error("GitHub Sign-In Error:", error));
  });

  // Google Sign-In
  document.getElementById('google-signup').addEventListener('click', () => {
    signInWithPopup(auth, googleProvider)
      .then(response => updateUI(response.user))
      .catch(error => console.error("Google Sign-In Error:", error));
  });

  // Email/Password Sign-In
  document.getElementById('email-login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then(response => updateUI(response.user))
      .catch(error => console.error("Email/Password Sign-In Error:", error));
  });
});

// Update UI After Sign-In
function updateUI(user) {
  const userProfilePic = user.photoURL || "default-avatar.png";
  const userName = user.displayName || user.email || "Anonymous";
  document.getElementById('user-info').innerHTML = `
    <img src="${userProfilePic}" alt="Profile Picture" style="width: 24px; height: 24px; border-radius: 50%; margin-right: 8px;">
    <span>${userName}</span>
  `;
}
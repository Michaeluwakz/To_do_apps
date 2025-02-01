import { auth } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

// Check if user is already logged in and redirect
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = 'homepage.html'; // Redirect if already logged in
  }
});

// Login form event listener
document
  .getElementById('login-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const loginButton = document.querySelector('#login-form button');

    // Disable button to prevent multiple clicks
    loginButton.disabled = true;
    loginButton.textContent = 'Logging in...';

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert('Login successful!');
      window.location.href = 'homepage.html'; // Redirect after login
    } catch (error) {
      let errorMessage = 'Login failed. Please try again.';

      // More specific error messages
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Too many attempts. Try again later.';
      }

      alert(errorMessage);
    }

    // Re-enable button
    loginButton.disabled = false;
    loginButton.textContent = 'Login';
  });

import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

document
  .getElementById('signup-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('Sign-up successful!');
        window.location.href = 'login.html'; // Redirect to login
      })
      .catch((error) => {
        alert(error.message);
      });
  });

import { auth } from './firebase-config.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

document.getElementById('logout-button').addEventListener('click', function () {
  signOut(auth)
    .then(() => {
      alert('Logged out!');
      window.location.href = 'index.html'; // Redirect to homepage
    })
    .catch((error) => {
      alert(error.message);
    });
});

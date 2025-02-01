// Import Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

// Your Firebase Config
const firebaseConfig = {
  apiKey: 'AIzaSyCKZCGYgIN_nTpJySU1EdS0TK7zT7rZwOo',
  authDomain: 'to-do-list-d0e94.firebaseapp.com',
  projectId: 'to-do-list-d0e94',
  storageBucket: 'to-do-list-d0e94.firebaseapp.com',
  messagingSenderId: '653842306428',
  appId: '1:653842306428:web:a94704a5668e993180c0f9',
  measurementId: 'G-CYSVEQCDZT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

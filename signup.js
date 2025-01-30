// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  signInWithPopup, 
  GoogleAuthProvider,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzm1k8cE3xD054kv5TItqoajNywgYQUVg",
  authDomain: "learn-and-earn-hub.firebaseapp.com",
  projectId: "learn-and-earn-hub",            
  storageBucket: "learn-and-earn-hub.appspot.com",
  messagingSenderId: "239116151857",
  appId: "1:239116151857:web:627011db2fea320a063910",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const emailInputEl = document.getElementById('email');
const passwordInputEl = document.getElementById('password');
const confirmInputEl = document.getElementById('confirmPassword');
const signButton = document.getElementById('signup-btn');
const usernameInputEl = document.getElementById('username');
const googleButton = document.getElementById('google');

googleButton.addEventListener('click', googleSignIn);

function googleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      window.location.href = "home.html";
    }).catch((error) => {
      alert(error.message);
    });
}

signButton.addEventListener('click', () => {
  const email = emailInputEl.value.trim();
  const password = passwordInputEl.value.trim();
  const confirmPassword = confirmInputEl.value.trim();
  const username = usernameInputEl.value.trim();

  // Validate inputs
  if (!username) {
    alert("Please enter a username.");
    return;
  }

  if (!email) {
    alert("Please enter an email.");
    return;
  }

  if (!password) {
    alert("Please enter a password.");
    return;
  }

  if (!confirmPassword) {
    alert("Please confirm your password.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // If all validations pass, create the account
  authCreateAccountWithEmail(email, password, username);
});

function authCreateAccountWithEmail(email, password, username) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      
      // Update profile with username
      return updateProfile(user, { displayName: username })
        .then(() => sendEmailVerification(user)) // Send verification email
        .then(() => {
          alert("A verification email has been sent. Please verify your email before logging in.");
        });
    })
    .catch((error) => {
      alert(error.message); // Show Firebase error messages
    });
}






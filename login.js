import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"

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
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const myEmail = document.getElementById('email')
const passwordInput = document.getElementById('password')

const login = document.getElementById('login')
login.addEventListener('click', loginFunc)
const google = document.getElementById('google')
google.addEventListener('click', googleSignIn)

function googleSignIn() {
signInWithPopup(auth, provider)
  .then((result) => {
    window.location.href = "home.html"
  }).catch((error) => {
    // Handle Errors here.
    alert(error.message)
  
    // ...
  });
}

function loginFunc() {
const email = myEmail.value
const password = passwordInput.value

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  const user = userCredential.user;
  if (!user.emailVerified) {
    alert("Please verify your email before logging in.");
    return;
  }
  window.location.href = "home.html";
})
  .catch((error) => {
    alert(error.message)

  });


}



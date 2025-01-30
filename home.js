
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzm1k8cE3xD054kv5TItqoajNywgYQUVg",
  authDomain: "learn-and-earn-hub.firebaseapp.com",
  projectId: "learn-and-earn-hub",            
  storageBucket: "learn-and-earn-hub.appspot.com",
  messagingSenderId: "239116151857",
  appId: "1:239116151857:web:627011db2fea320a063910",
  measurementId: "G-Y2P7FRP02Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Select the greeting element
const greetingEl = document.getElementById("greeting");

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Get username from localStorage or Firebase profile
    const username = localStorage.getItem("username") || user.displayName || "User";
    
    // Display username with "Hey" message
    greetingEl.textContent = `Hey, ${username} 👋!`;
  } else {
    // Redirect to signup page if not logged in
    window.location.href = "signup.html";
  }
});
 
 
 const x = document.getElementById('x')
const hamburgerMenu = document.getElementById("hamburgerMenu")
const mobileMenu = document.getElementById("mobileMenu") 

      hamburgerMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle('hidden');
})

x.addEventListener('click', function() {
  mobileMenu.classList.toggle('hidden');

})
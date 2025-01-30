import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"

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

const logout = document.getElementById('logout')
logout.addEventListener('click', logOutFunc)

function logOutFunc() {

signOut(auth)
  .then((userCredential) => {
    window.location.href = 'index.html'
  })
  .catch((error) => {
    alert(error.message)

  });


}







const back = document.getElementById('back')
back.addEventListener('click', function() {
    history.back()
})

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAuth,  sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


const resetButton = document.getElementById("resetButton");
 const myEmail = document.getElementById('email')

 resetButton.addEventListener('click', resetPassword)
const email = myEmail.value


 function resetPassword() {

    const email = myEmail.value

 sendPasswordResetEmail(auth, email)
   .then(() => {
    alert("Password reset email sent. Please check your inbox.");
   })
   .catch((error) => {
     
     alert(error.message);
     // ..
   });

 }

let msg = document.getElementById('msg');

const back = document.getElementById("back");
let hint = document.getElementById("hint")
let signBtn = document.getElementById('signup-btn')


const message = "It happens to the best of us! Just input the email address you used in signing up to the account you wish to retrieve and follow the simple steps to reset your password.";

resetButton.addEventListener("click", function () {
});

 back.addEventListener("click", function () {
        history.back();
      });

     
  hint.addEventListener('click', function () {
    
    if (msg.textContent.trim() === "") {
        msg.textContent = message; 
    } else {
        msg.textContent = ""; 
    }
    msg.classList.toggle('hidden');
})


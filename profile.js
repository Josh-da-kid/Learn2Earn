
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzm1k8cE3xD054kv5TItqoajNywgYQUVg",
    authDomain: "learn-and-earn-hub.firebaseapp.com",
    projectId: "learn-and-earn-hub",
    storageBucket: "learn-and-earn-hub.appspot.com",
    messagingSenderId: "239116151857",
    appId: "1:239116151857:web:627011db2fea320a063910",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const defaultProfilePic = "https://via.placeholder.com/100";  // Default profile picture URL

document.addEventListener("DOMContentLoaded", () => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            document.getElementById("email").textContent = user.email;
            document.getElementById("username").value = user.displayName || "Username";
            
            const userDoc = await getDoc(doc(db, "users", user.uid));
           
            }
        
    });
});

    const profile = document.getElementById("save-profile")
profile.addEventListener("click", async () => {
    const user = auth.currentUser;
    if (user) {
        const newUsername = document.getElementById("username").value.trim();

        // Update Firebase Auth profile with new username
        await updateProfile(user, { displayName: newUsername });

        // Save new username to Firestore
        await setDoc(doc(db, "users", user.uid), { username: newUsername }, { merge: true });

        alert("Profile updated successfully!"); // Optional: Notify the user
    }


    
});

const back = document.getElementById('back')
back.addEventListener('click', function() {
    history.back()
})
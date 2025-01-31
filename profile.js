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
    onAuthStateChanged(auth, (user) => {
        if (user) {
            document.getElementById("email").textContent = user.email;
            document.getElementById("username").value = user.displayName || "Username";

            // Fetch user data from Firestore
            getDoc(doc(db, "users", user.uid))
                .then((userDoc) => {
                    if (userDoc.exists()) {
                        const userData = userDoc.data(); // Corrected variable name
                        document.getElementById("photo-url-input").value = userData.photoURL || "";
                        document.getElementById("profile-pic-preview").src = userData.photoURL || defaultProfilePic;
                    } else {
                        document.getElementById("profile-pic-preview").src = defaultProfilePic;
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                });
        }
    });
});

const profile = document.getElementById("save-profile");
const photoURLInputEl = document.getElementById("photo-url-input");
const profilePic = document.getElementById("profile-pic-preview");

profile.addEventListener("click", () => {
    const user = auth.currentUser;
    if (user) {
        const newUsername = document.getElementById("username").value.trim();
        const newPhotoURL = photoURLInputEl.value.trim(); // Get the input value

        updateProfile(user, { displayName: newUsername, photoURL: newPhotoURL });

        setDoc(doc(db, "users", user.uid), { username: newUsername, photoURL: newPhotoURL }, { merge: true });

        profilePic.src = newPhotoURL || defaultProfilePic;

        alert("Profile updated successfully!");
    }
});

const back = document.getElementById("back");
back.addEventListener("click", function () {
    history.back();
});


const modal = document.getElementById("profile-modal");
const modalImg = document.getElementById("modal-img");

// Show popup when profile picture is clicked
profilePic.addEventListener("click", () => {
    modalImg.src = profilePic.src;
    modal.classList.remove("hidden");
});

// Hide popup when clicking outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

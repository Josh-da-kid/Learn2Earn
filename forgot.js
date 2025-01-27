let info = document.getElementById('info');
let msg = document.getElementById('msg');
let resetButton = document.getElementById("rp-btn");

let signBtn = document.getElementById('signup-btn')


const messageText = "It happens to the best of us! Just input the email address you used in signing up to the account you wish to retrieve and follow the simple steps to reset your password.";

info.addEventListener('click', function () {
    
    if (msg.textContent.trim() === "") {
        msg.textContent = messageText; 
    } else {
        msg.textContent = ""; 
    }
});

resetButton.addEventListener("click", function () {
    msg.textContent = ""; 
});

signBtn.addEventListener('click', function() {
    document.location.href = "home.html";
})
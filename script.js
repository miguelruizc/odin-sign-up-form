const form = document.getElementById("form");
const password1 = document.getElementById("user-password");
const password2 = document.getElementById("confirm-password");
const error = document.getElementById("password-error");

form.addEventListener("submit", (e)=> {
    if(password1.value != password2.value) {
        error.innerText = "*Passwords don't match";
        e.preventDefault();
    }
});
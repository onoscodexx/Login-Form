// First, pick out your IDs using the const
const loginForm = document.getElementById("login-form");
const successMsg = document.getElementById("success-msg");
const errorMsg = document.getElementById("error-msg");
const btnSubmit = document.getElementById("btn-submit");

// Next add an event listener for your submit button
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.pwd.value;

    // Next add an if statement for login credentials match
    if (email === "test@gmail.com" && password === "test123") {
        successMsg.classList.remove("visually-hidden");
        errorMsg.classList.add("visually-hidden");
    }
    else {
        successMsg.classList.add("visually-hidden");
        errorMsg.classList.remove("visually-hidden");
    }
})
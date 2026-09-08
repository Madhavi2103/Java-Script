document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");

    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");


    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let isValid = true;

        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";


        // Username validation
        if (usernameInput.value.trim() === "") {

            usernameError.textContent =
                "Username is required.";

            isValid = false;

        } else if (usernameInput.value.trim().length < 3) {

            usernameError.textContent =
                "Username must be at least 3 characters.";

            isValid = false;
        }


        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput.value.trim() === "") {

            emailError.textContent =
                "Email is required.";

            isValid = false;

        } else if (!emailPattern.test(emailInput.value.trim())) {

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;
        }


        // Password validation
        if (passwordInput.value.trim() === "") {

            passwordError.textContent =
                "Password is required.";

            isValid = false;

        } else if (passwordInput.value.trim().length < 6) {

            passwordError.textContent =
                "Password must be at least 6 characters.";

            isValid = false;
        }


        // Success
        if (isValid) {

            alert("Account created successfully! ✨");

            form.reset();
        }

    });

});
// Cnic Number Masking
function formatNumber() {
    const input = document.getElementById("cnic");
    let value = input.value.replace(/\D/g, ""); // Remove non-numeric characters

    if (value.length > 5) {
        value = `${value.slice(0, 5)}-${value.slice(5, 12)}`; // Add first dash
    }
    if (value.length > 12) {
        value = `${value}-${value.slice(12, 13)}`; // Add second dash
    }

    input.value = value;
}

function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.setAttribute("name", "eye-off-outline");
    } else {
        passwordField.type = "password";
        toggleIcon.setAttribute("name", "eye-outline");
    }
}


// Password Strength
const passwordField = document.getElementById('password');
const passwordStrength = document.getElementById('password-strength');
const lowUpperCase = document.getElementById('lowerUpperCase');
const number = document.getElementById('passwordNumber');
const bar_1 = document.getElementById('bar-1');
const bar_2 = document.getElementById('bar-2');
const bar_3 = document.getElementById('bar-3');


passwordField.addEventListener('keyup', (e) => {
    const password = e.target.value;
    checkStrength(password)
})

function checkStrength(password) {
    let strength = 0

    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
        lowUpperCase.classList.remove('bx-x-circle');
        lowUpperCase.classList.add('bxs-check-circle');
    } else {
        lowUpperCase.classList.add('bx-x-circle');
        lowUpperCase.classList.remove('bxs-check-circle');
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
        strength += 1;
        number.classList.remove('bx-x-circle');
        number.classList.add('bxs-check-circle');
    } else {
        number.classList.add('bx-x-circle');
        number.classList.remove('bxs-check-circle');
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        specialChar.classList.remove('bx-x-circle');
        specialChar.classList.add('bxs-check-circle');
    } else {
        specialChar.classList.add('bx-x-circle');
        specialChar.classList.remove('bxs-check-circle');
    }
    //If password is greater than 7
    if (password.length > 7) {
        strength += 1;
        eightChar.classList.remove('bx-x-circle');
        eightChar.classList.add('bxs-check-circle');
    } else {
        eightChar.classList.add('bx-x-circle');
        eightChar.classList.remove('bxs-check-circle');
    }

    // If value is less than 2
    if (strength < 2) {
        bar_1.classList.add('active');
        bar_2.classList.remove('active');
        bar_3.classList.remove('active');
        bar_1.style = 'width: 100%';
    } else if (strength == 3) {
        bar_1.classList.add('active');
        bar_2.classList.add('active');
        bar_3.classList.remove('active');
        bar_2.style = 'width: 100%';
    } else if (strength == 4) {
        bar_1.classList.add('active');
        bar_2.classList.add('active');
        bar_3.classList.add('active');
        bar_3.style = 'width: 100%';
    }
}
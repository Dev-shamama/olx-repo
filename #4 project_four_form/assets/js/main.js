window.addEventListener('load', function () {


    // Name
    let name = document.getElementById('name');

    name.addEventListener('focus', function () {

    });

    name.addEventListener('blur', function () {
        if (!this.value) {
            this.classList.remove('isEmpty');
        }
    });



    // CNIC

    let cnic = document.getElementById('cnic');

    cnic.addEventListener('focus', function () {
        this.classList.add('isEmpty');
    });

    cnic.addEventListener('blur', function () {
        if (!this.value) {
            this.classList.remove('isEmpty');
        }
    });

    // Daraz
    let daraz = document.getElementById('daraz');

    daraz.addEventListener('focus', function () {
        this.classList.add('isEmpty');
    });

    daraz.addEventListener('blur', function () {
        if (!this.value) {
            this.classList.remove('isEmpty');
        }
    });

    // whatsapp
    let whatsapp = document.getElementById('whatsapp');

    whatsapp.addEventListener('focus', function () {
        this.classList.add('isEmpty');
    });

    whatsapp.addEventListener('blur', function () {
        if (!this.value) {
            this.classList.remove('isEmpty');
        }
    });




    // chooseBike
    let chooseBike = document.getElementById('chooseBike');

    chooseBike.addEventListener('focus', function () {
        this.classList.add('isEmpty');
    });

    chooseBike.addEventListener('blur', function () {
        if (!this.value) {
            this.classList.remove('isEmpty');
        }
    });



    // dateBirth
    let dateBirth = document.getElementById('dateBirth');

    dateBirth.addEventListener('focus', function () {
        this.classList.add('isEmpty');
    });

    dateBirth.addEventListener('blur', function () {
        if (!this.value) {
            this.classList.remove('isEmpty');
        }
    });


    // city
    let city = document.getElementById('city');

    city.addEventListener('focus', function () {
        this.classList.add('isEmpty');
        console.log(this)
    });

    city.addEventListener('blur', function () {
        if (!this.value) {
            this.classList.remove('isEmpty');
        }
    });




    // address
    let address = document.getElementById('address');

    address.addEventListener('focus', function () {
        this.classList.add('isEmpty');
    });

    address.addEventListener('blur', function () {
        if (!this.value) {
            this.classList.remove('isEmpty');
        }
    });





    // Income Type

    let incomeType = document.getElementById('incomeType');

    incomeType.addEventListener('focus', function () {
        this.classList.add('isEmpty');
    });

    incomeType.addEventListener('blur', function () {
        if (!this.value) {
            this.classList.remove('isEmpty');
        }
    });


    // password
    let password = document.getElementById('password');

    password.addEventListener('focus', function () {
        this.classList.add('isEmpty');
    });

    password.addEventListener('blur', function () {
        if (!this.value) {
            this.classList.remove('isEmpty');
        }
    });


});



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


// Date of Birth Validate
const dobInput = document.getElementById("dateBirth");
const errorMessage = document.getElementById("error-message");

dobInput.addEventListener("input", function () {
    if (validateDateOfBirth(dobInput.value)) {
        console.log(errorMessage)
        // errorMessage.style.display = "none";
    } else {
        console.log(errorMessage)

        // errorMessage.style.display = "block";
    }
});

function validateDateOfBirth(dob) {
    const today = new Date();
    const minAge = 20;
    const maxAge = 60;

    // Calculate the minimum and maximum allowed dates
    const minDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
    const maxDate = new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate());

    // Convert dob to a Date object
    const dateOfBirth = new Date(dob);

    // Check if dob is between maxDate and minDate
    return dateOfBirth <= minDate && dateOfBirth >= maxDate;
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







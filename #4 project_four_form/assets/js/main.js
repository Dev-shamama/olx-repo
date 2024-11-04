window.addEventListener('load', function () {
    // Name
    let name = document.getElementById('name');

    name.addEventListener('focus', function () {
        this.classList.add('isEmpty');
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
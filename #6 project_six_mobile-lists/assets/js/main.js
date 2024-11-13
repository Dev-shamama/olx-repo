const take_picture = document.getElementById("take-picture");
const video = document.getElementById('video');
const canvas = document.getElementById('photo');
const captureBtn = document.getElementById('capture-btn');
const context = canvas.getContext('2d');

take_picture.addEventListener("click", () => {
    document.getElementById('camera-model').style.display = "flex";
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
            video.play();
        })
        .catch((error) => {
            console.error("Error accessing the camera: ", error);
        });
});


// Capture photo on button click
captureBtn.addEventListener('click', () => {

    const video = document.getElementById('video');
    // Capture photo and draw to canvas
    context.drawImage(video, 0, 0, window.width, window.height);

    // Convert the canvas image to a data URL
    const dataURL = canvas.toDataURL('image/png');
    console.log(dataURL);

    const mediaStream = video.srcObject;
    const tracks = mediaStream.getTracks();
    tracks[0].stop();
    tracks.forEach(track => track.stop())
    document.getElementById('camera-model').style.display = "none";

});



const close_otp_model = document.getElementById("close-otp-model");
close_otp_model.addEventListener("click", () => {
    document.getElementById('otp-model-container').style.display = "none";
});

const otp_model_open = document.getElementById("otp-model-open");
otp_model_open.addEventListener("click", () => {
    document.getElementById('otp-model-container').style.display = "flex";
});

document.getElementById('note-customer').addEventListener("click", () => {
    // document.getElementById('note-customer-model-container').style.display = "flex";
    window.location.href = "noteCustomer.html";
});

// document.getElementById('close-note-cusomter-model').addEventListener("click", () => {
//     document.getElementById('note-customer-model-container').style.display = "none";
// });






let countdown = 120; // Set the countdown time (in seconds)
let timer; // Variable to store the interval

function startResendTimer() {
    // Disable the button during the countdown
    document.getElementById('timer').disabled = true;

    // Display the initial countdown before starting the interval
    document.getElementById('timer').textContent = `(${countdown}s)`;

    // Start the countdown with a 1-second delay
    setTimeout(() => {
        timer = setInterval(updateTimer, 1000);
    }, 0);
}

function updateTimer() {
    const timerElement = document.getElementById('timer');

    if (countdown > 0) {
        countdown--;
        timerElement.textContent = `(${countdown}s)`;
    } else {
        // Re-enable the button
        timerElement.disabled = false;
        timerElement.textContent = 'Resend OTP';

        // Reset countdown for the next attempt
        countdown = 120;

        // Stop the timer
        clearInterval(timer);
    }
}

// Start the timer on page load



startResendTimer()



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
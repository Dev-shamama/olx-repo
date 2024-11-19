

function openModelTab(event, tabId) {
  // Deselect all brand tabs and bike selection tabs
  document
    .querySelectorAll(".tab")
    .forEach((brand) => brand.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((tab) => tab.classList.remove("active"));

  // Activate selected brand tab and corresponding bike selection tab
  event.currentTarget.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}


document.getElementById('tab1').classList.add('active');

document.addEventListener('DOMContentLoaded', () => {
  const togglers = document.querySelectorAll('[data-toggle]');

  togglers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const selector = e.currentTarget.dataset.toggle
      const block = document.querySelector(`${selector}`);
      if (e.currentTarget.classList.contains('active')) {
        block.style.maxHeight = '';
      } else {
        block.style.maxHeight = block.scrollHeight + 'px';
      }

      e.currentTarget.classList.toggle('active')
    })
  })
})


const contactForm = document.getElementById('contactForm');
const successContainer = document.getElementById('successContainer');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const whatsapp = document.getElementById('whatsapp').value;
  const contactReason = document.getElementById('contactReason').value;
  const message = document.getElementById('message').value;


  if (name === '' || whatsapp === '' || contactReason === '' || message === '') {
    alert('Please fill all the fields');
    return;
  }

  const data = {
    name,
    whatsapp,
    contactReason,
    message
  }

  console.log(data);


  contactForm.style.display = 'none';
  successContainer.style.display = 'flex';

  setCookie("contact", "true", 30);

})

const contactUsCookie = getCookie("contact");
if (contactUsCookie) {
  contactForm.style.display = 'none';
  successContainer.style.display = 'flex';
}




function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // 30 days in milliseconds
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null; // Returns null if the cookie does not exist
}

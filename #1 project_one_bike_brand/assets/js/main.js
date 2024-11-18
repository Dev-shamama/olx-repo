// Function to handle opening a model tab
function openModelTab(event, tabId) {
  // Deselect all brand tabs and bike selection tabs
  document.querySelectorAll('.item-brand').forEach(brand => brand.classList.remove('active'));
  document.querySelectorAll('.choose-bike').forEach(tab => tab.classList.remove('active'));

  // Activate selected brand tab and corresponding bike selection tab
  event.currentTarget.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// Function to handle opening model detail within a bike tab
function openModelDetailTab(event, tabId) {
  // Deselect all model options and details
  document.querySelectorAll('.item-text').forEach(item => item.classList.remove('active'));
  document.querySelectorAll('.bike-model-content').forEach(content => content.classList.remove('active'));

  // Activate selected model option and corresponding details
  event.currentTarget.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

const item_texts = document.querySelectorAll('.item-text');
const item_brand = document.querySelectorAll('.item-brand');

const choose_option = document.querySelector('#choose-option');

item_brand.forEach(i => {
  i.addEventListener('click', () => {
    choose_option.classList.remove('active')
  })
})

item_texts.forEach(e => {
  e.addEventListener("click", () => {
    console.log(e);
    choose_option.classList.add('active')
  })
})




// =============================================================


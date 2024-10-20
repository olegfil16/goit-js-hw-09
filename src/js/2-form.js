const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
populateTextAres();
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  event.preventDefault();
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextAres() {
  const savedInfo = localStorage.getItem(STORAGE_KEY);

  if (savedInfo) {
    formData = JSON.parse(savedInfo);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
    // console.log(formData);
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  formData = { email: '', message: '' };
}

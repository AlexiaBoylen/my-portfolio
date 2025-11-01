const buttons = document.querySelectorAll('.btn-toggle');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling; 

    if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block';
      button.textContent = 'Hide Details';
    } else {
      details.style.display = 'none';
      button.textContent = 'Show Details';
    }
  });
});
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

form.addEventListener('submit', (event) => {
  let isValid = true;

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  nameInput.classList.remove('invalid');
  emailInput.classList.remove('invalid');
  messageInput.classList.remove('invalid');

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    nameInput.classList.add('invalid');
    isValid = false;
  }

  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === '') {
    emailError.textContent = 'Please enter your email.';
    emailInput.classList.add('invalid');
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('invalid');
    isValid = false;
  }

  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Please enter a message.';
    messageInput.classList.add('invalid');
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    alert('Thank you! Your message has been sent.');
  }
});
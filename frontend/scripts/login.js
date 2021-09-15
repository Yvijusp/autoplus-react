// API
import { REGISTER_ENDPOINT, LOGIN_ENDPOINT } from '../apis/api.js';
// --- Sign in ---

// Variables
// -- DOMElements
const signinFormElement = document.querySelector('#signin-form');
const signinMessageOutputElement = document.querySelector('#signin-message');

// Functions
const signinUser = (e) => {
  e.preventDefault();

  let user = {
    email: e.target.elements.loginEmail.value,
    password: e.target.elements.loginPass.value,
  };

  return fetch(LOGIN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.status === 'fail') {
        signinMessageOutputElement.classList.remove('hidden');
        e.target.loginEmail.value = '';
        e.target.loginPass.value = '';

        e.target.loginEmail.focus();
        signinMessageOutputElement.classList.add(
          'form-message',
          'form-message-danger'
        );
        return (signinMessageOutputElement.innerText = result.message);
      }

      console.log(result);

      localStorage.setItem('User', JSON.stringify(result.user));

      location.href = '../pages/myaccount.html';
    });
};
// Events
signinFormElement.addEventListener('submit', signinUser);

// --- Sign up ---

// Variables
// -- DOMElements
const signupFormElement = document.querySelector('#signup-form');
const signupMessageOutputElement = document.querySelector('#signup-message');

// Functions

const signup = (e) => {
  e.preventDefault();

  signupMessageOutputElement.innerText = '';

  // --- Validating if passwords match
  if (e.target.registerPass.value !== e.target.registerConfirmPass.value) {
    signupMessageOutputElement.classList.remove('hidden');
    e.target.registerPass.value = '';
    e.target.registerConfirmPass.value = '';
    signupMessageOutputElement.classList.add(
      'form-message',
      'form-message-danger'
    );
    return (signupMessageOutputElement.innerText = 'Password must match.');
  }

  let user = {
    name: e.target.registerName.value,
    surname: e.target.registerSurname.value,
    email: e.target.registerEmail.value,
    password: e.target.registerPass.value,
  };

  // --- Sending data to database
  fetch(REGISTER_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.status === 'fail') {
        signupMessageOutputElement.classList.remove('hidden');
        e.target.registerPass.value = '';
        e.target.registerConfirmPass.value = '';
        e.target.registerEmail.value = '';

        e.target.registerEmail.focus();

        return (signupMessageOutputElement.innerText = result.message);
      }

      console.log(result);

      localStorage.setItem('User', JSON.stringify(result.user.id));

      location.href = '../pages/myaccount.html';
    });
};

// Events
signupFormElement.addEventListener('submit', signup);

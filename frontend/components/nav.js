// Variables
// --- DOMElements
const nav = document.querySelector('nav');

// Functions
const navDisplay = () => {
  // ---- Creating HTML elements ----
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  const li2 = li.cloneNode();
  const a = document.createElement('a');
  const a2 = a.cloneNode();

  // ---- Adding content and attributes to HTML elements ----
  a.href = location.href.includes('pages') ? '../index.html' : 'index.html';
  a.innerText = 'Home';

  let user = JSON.parse(localStorage.getItem('User'));

  if (user) {
    a2.href = location.href.includes('pages')
      ? './myaccount.html'
      : './pages/myaccount.html';
    a2.innerHTML = 'My Account <i class="fas fa-user"></i>';
  } else {
    a2.href = location.href.includes('pages')
      ? './login.html'
      : './pages/login.html';
    a2.innerHTML = `Sign In / Sign Up <i class="fas fa-sign-in-alt"></i>`;
  }

  // ---- Appending elements to DOM ----
  li.appendChild(a);
  li2.appendChild(a2);
  ul.append(li, li2);

  nav.appendChild(ul);
};

// Events
document.addEventListener('DOMContentLoaded', navDisplay);

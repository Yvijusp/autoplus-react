// API
import {
  USER_ENDPOINT,
  DELETE_CAR_ENDPOINT,
  ADD_CAR_ENDPOINT,
} from '../apis/api.js';

// Variables
// --- DOMElements
const userGreetingContainerElement = document.querySelector('#greeting');
const userInfoContainerElement = document.querySelector(
  '#user-info--container'
);
const userCarsListElement = document.querySelector('#user-cars--list');
const carFormElement = document.querySelector('#car-form');
const carMessageElement = document.querySelector('#car-input--message');

// Functions
// GET user data

// GET user info using ID
const getUser = () => {
  const user = JSON.parse(localStorage.getItem('User'));
  if (!user) return (location.href = './login.html');

  return fetch(USER_ENDPOINT + user)
    .then((response) => response.json())
    .then((result) => {
      displayUser(result);
      displayCars(result);
    });
};

// Display user
const displayUser = (userData) => {
  userGreetingContainerElement.innerHTML = `<h1 class="text-center headline">Hello, ${userData.name}</h1>`;

  userInfoContainerElement.innerHTML = `
  <div><i class="fas fa-user fa-2x"></i></div>
  <h3>${userData.name} ${userData.surname}</h3>
  <p>${userData.email}</p>
  <p>Cars for sale: ${userData.cars.length}</p>  
  <button class="btn-primary mt-1" id="logout">Log out</button>
  `;

  const logoutButton = document.querySelector('#logout');

  logoutButton.addEventListener('click', userLogout);
};

// Display user cars

const displayCars = (userData) => {
  if (userData.cars.length) {
    userCarsListElement.innerHTML = `
    <table class="text-center"> 
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Price</th>
          <th></th>
          </tr>
      </thead>
      <tbody>
      ${userData.cars.reduce((a, v) => {
        return (a += `
        <tr>
          <td>${v.make}</td>
          <td>${v.model}</td>
          <td>${v.year}</td>
          <td>${v.price}€</td>
          <td><button class="btn-primary delete-btn" data-userId=${userData._id} data-carId=${v._id}>Delete</button></td>
        </tr> 
        `);
      }, '')}
      </tbody>
    </table> 
    `;

    const deleteBtn = document.querySelectorAll('.delete-btn');

    deleteBtn.forEach((btn) => btn.addEventListener('click', deleteCar));
  } else {
    userCarsListElement.classList.add('form-message', 'form-message-danger');
    userCarsListElement.innerHTML = `<p>You don't have any cars for sale</p>`;
  }
};

// User logoout functions, on button click deletes user from local storage and redirects to homepage

const userLogout = (e) => {
  // Removing user from localstorage
  localStorage.removeItem('User');

  location.href = '../index.html';
};

// Delete car from the table. Using delete button created in displayCars function
const deleteCar = (e) => {
  const userId = e.target.dataset.userid;
  const carId = e.target.dataset.carid;

  fetch(DELETE_CAR_ENDPOINT + carId, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((result) => {
      displayCars(result);
      displayUser(result);
    });
};

// Adding car to user cars array inside database.

const addCar = (e) => {
  e.preventDefault();

  let userId = JSON.parse(localStorage.getItem('User'));

  if (
    !+e.target.elements['car-year'].value ||
    !+e.target.elements['car-price'].value
  )
    return;

  let car = {
    make: e.target.elements['car-make'].value,
    model: e.target.elements['car-model'].value,
    year: +e.target.elements['car-year'].value,
    price: +e.target.elements['car-price'].value,
  };

  console.log(car);

  fetch(ADD_CAR_ENDPOINT + userId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  })
    .then((response) => response.json())
    .then((result) => {
      displayCars(result);
      displayUser(result);
      userCarsListElement.classList.remove(
        'form-message',
        'form-message-danger'
      );

      carMessageElement.classList.remove('hidden');
      carMessageElement.classList.add('form-message', 'form-message-success');

      carMessageElement.innerText = 'Car added';

      carFormElement.reset();
    });
};

// Events
carFormElement.addEventListener('submit', addCar);
document.addEventListener('DOMContentLoaded', getUser);

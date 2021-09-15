// API
import { ENDPOINT } from '../apis/api.js';
// const ENDPOINT = 'http://localhost:8000/cars/';

// Variables
// --- DOMElements
const carsContainer = document.querySelector('#latest--cars-container');

// Functions
const displayLatestCars = async () => {
  let cars = await fetch(ENDPOINT);
  let result = await cars.json();

  carsContainer.innerHTML = result.reduce((a, v) => {
    a += v.cars.reduce((acc, cur) => {
      acc += `
      <div class="car card-shadow" data-id="${cur._id}">
        <h4>${cur.make} ${cur.model}</h4>
        <p><strong>Year:</strong> ${cur.year}</p>
        <p><strong>Price:</strong> ${cur.price.toFixed(2)}€</p>
        <p><strong>Seller:</strong> ${v.name} ${v.surname}</p>
        <p><strong>Contact email:</strong> ${v.email}</p>
      </div>
      `;

      return acc;
    }, '');
    return a;
  }, '');
};

// Events

document.addEventListener('DOMContentLoaded', displayLatestCars);

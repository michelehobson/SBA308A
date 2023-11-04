import * as Location from './modLocation.js';
import * as Weather from './modWeather.js';

const whereTo = document.querySelector('div:nth-of-type(1)');
const selection = document.querySelector('select');

const arr = ['apples', 'peaches', 'pumpkin', 'pie'];

const optionBlank = document.createElement("option");
selection.appendChild(optionBlank);

arr.forEach((item, index) => {
   const option = document.createElement("option");
   option.value = item;
   option.text = item;
   // console.log(option)
   selection.appendChild(option);
})

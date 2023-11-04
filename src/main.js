import * as Location from './modLocation.js';
// import * as Weather from './modWeather.js';
import data from './database.json' assert {type: 'json'}

const whereTo = document.querySelector('div:nth-of-type(1)');
const selection = document.querySelector('select');

const optionBlank = document.createElement("option");
selection.appendChild(optionBlank);

loadCountries();

function loadCountries() {
   try {
      let countries = data//{data: "country", data: "ISO2"}
      console.log(data)
      let index = 0;
      for ( const country in countries) {
         const option = document.createElement("option");
         option.text = data[index].country;
         option.value = data[index].iso2
         selection.appendChild(option);

         console.log(data[index].country)
         console.log(data[index].iso2)
         index++;
      }
   } catch(error) {
      console.log(error)
   }
}

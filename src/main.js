import * as Location from './modLocation.js';
// import * as Weather from './modWeather.js';
import data from './database.json' assert {type: 'json'}

const whereTo = document.querySelector('div:nth-of-type(1)');
const regions = document.querySelector('div:nth-of-type(2)');
const cities = document.querySelector('div:nth-of-type(3)');

const country = document.querySelector('select');
let countryIso = '';

let regionIso = '';
let regionLong;
let regionLat;
let cityIso = '';
let cityLong;
let cityLat;

let regionArray = [[],[]]; //
let cityArray = [[],[]];

const optionBlank = document.createElement("option");
country.appendChild(optionBlank);

loadCountries();

function loadCountries() {
   try {
      let countries = data;
      let index = 0;
      for(const c in countries) {
         const option = document.createElement("option");
         option.text = data[index].country;
         option.value = data[index].iso2
         country.appendChild(option);
         index++;
      }
   } catch(error) {
      console.log(error)
   }
}

country.addEventListener('change', async (e) => {
   e.preventDefault();
   if(countryIso !== country.value) { //Prevent unnecessay API calls
      if(country.value.length > 0) {
         countryIso = country.value;
         console.log(country.value)

         let loadRegions = Location.getStates(countryIso);
         console.log(loadRegions)
         if(loadRegions !== null) {
            const select = document.createElement('select');
            regions.innerHTML = 'Region';
            regions.classList.add('regions');
            regions.appendChild(select);
            const regionalData = await loadRegions.json();
            regionalData.array.forEach(element => {
               const option = document.createElement("option");
               option.text = element.name;
               option.value = element.isoCode;
               regions.appendChild(option);
               regionArray.push(element.isoCode, element.latitude, element.longitude)
            });
         }
      } else {
         countryIso = '';
         cityIso = '';
         cities.removeChild(cities.firstChild); //Removes the label City
         cities.removeChild(cities.firstChild); //Removes the dropdown
         regionIso = '';
         regions.removeChild(regions.firstChild); //Removes the label Region
         regions.removeChild(regions.firstChild); //Removes the dropdown
         regionArray = [[],[]];
         cityArray = [[],[]];

      }
   }
})

regions.addEventListener('change', async (e) => {
   e.preventDefault();
   if(regionArray.length === 0) { //Prevent unnecessay API calls
      cityArray = [[],[]];
      if(regions.value.length > 0) {
         regionIso = regions.value;
         regionLat = re
         console.log(regions.value)
         let loadCities = Location.getCities(countryIso, regionIso);
         console.log(loadCities)
         if(loadRegions !== null) {
            const select = document.createElement('select');
            cities.innerHTML = 'City';
            cities.classList.add('cities');
            cities.appendChild(select);
            const cityData = await loadCities.json();
            cityData.array.forEach(element => {
               const option = document.createElement("option");
               option.text = element.name;
               option.value = element.isoCode;
               cities.appendChild(option);
               cityArray.push(element.isoCode, element.latitude, element.longitude)
            });
         }
      } else {
         regionIso = '';
         cities.removeChild(cities.firstChild); //Removes the label City
         cities.removeChild(cities.firstChild); //Removes the dropdown
         regionArray = [[],[]];
         cityArray = [[],[]];
      }
   } else {
      let notFound = true;
      let i = 0;
      while (notFound) {
         if (regionArray[i][0] === regions.value)
            
      }
   }
})

cities.addEventListener('change', async (e) => { //Prevent unnecessay API calls
   e.preventDefault()
   if(cityArray.length === 0) {
      if(cities.value.length > 0) {
         cityIso = cities.value;
         console.log(cities.value)
         let loadCities = Location.getCities(countryIso, regionIso);
         console.log(loadCities)
         if(loadRegions !== null) {
            const select = document.createElement('select');
            cities.innerHTML = 'City';
            cities.classList.add('cities');
            cities.appendChild(select);
            const cityData = await loadCities.json();
            cityData.array.forEach(element => {
               const option = document.createElement("option");
               option.text = element.name;
               option.value = element.isoCode;
               cities.appendChild(option);
            });
         }
      } else {
         regionIso = '';
         cities.removeChild(cities.firstChild); //Removes the label City
         cities.removeChild(cities.firstChild); //Removes the dropdown
         cityArray = [[],[]];

      }
   }
})
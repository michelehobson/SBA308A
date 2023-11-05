import * as Location from './modLocation.js';
// import * as Weather from './modWeather.js';

var key = countryConfig.KEY;
var host = countryConfig.HOST;

// const whereTo = document.querySelector('div:nth-of-type(1)');
// const regions = document.querySelector('div:nth-of-type(2)');
// const cities = document.querySelector('div:nth-of-type(3)');
const wToSelect = document.querySelector('select:nth-of-type(1)');
const regSelect = document.getElementById('selectRegion');
const citySelect = document.getElementById('selectCity');

const country = document.querySelector('select:nth-of-type(1)');
const region = document.getElementById('selectRegion');
const city = document.getElementById('selectCity');

let countryIso = '';
let regionIso = '';
let cityIso = '';

if(wToSelect.length === 0) {
   Location.getCountries(wToSelect);
}

async function getStates(country) {
   const states = await axios.get(`https://country-state-city-search-rest-api.p.rapidapi.com/states-by-countrycode`,
       {
           params: {countrycode: country},
           headers: {
               'X-RapidAPI-Key': key,
               'X-RapidAPI-Host': host
           },
       }
   )
   if(states !== null) {
       console.log('states !== null')
       const regionOptionBlank = document.createElement("option");
       regSelect.appendChild(regionOptionBlank);
       states.data.forEach((region) => {
          const regionOption = document.createElement("option");
          regionOption.text = region.name;
          regionOption.value = region.isoCode;
          regSelect.appendChild(regionOption);
       });
   }
}

async function getCities(country, regionCode) {
   const cities = await axios.get(`https://country-state-city-search-rest-api.p.rapidapi.com/cities-by-countrycode-and-statecode`,
       {
           params: {
               countrycode: country,
               statecode: regionCode
             },            
           headers: {
               'X-RapidAPI-Key': key,
               'X-RapidAPI-Host': host
           },
       }
   )
   if(cities !== null) {
       const cityOptionBlank = document.createElement("option");
       citySelect.appendChild(cityOptionBlank);
       cities.data.forEach((city) => {
          const cityOption = document.createElement("option");
          cityOption.text = city.name;
          cityOption.value = city.latitude.concat(',').concat(city.longitude);
          citySelect.appendChild(cityOption);
       });
   }
}

country.addEventListener('change', async (e) => {
   console.log('County Triggered')
   e.preventDefault();
   if(country.value !== countryIso) {
      if(country.value.length > 0) {
         countryIso = country.value;
         console.log(countryIso)
         clearRegions();
         getStates(countryIso);
      } else {
         countryIso = '';
         clearRegions();
      }
   } else {
      countryIso = '';
      clearRegions();
   }
})

region.addEventListener('change', async (e) => {
   console.log("Region Triggered")
   e.preventDefault();
   if(region.value !== regionIso) {
      if(region.value.length > 0) {
         regionIso = region.value;
         clearCities();
         getCities(countryIso, regionIso)
      } else {
         clearRegions();
      }
   } else {
      clearRegions();
   }
})

city.addEventListener('change', async (e) => { //Prevent unnecessay API calls
   console.log("City Triggered")

   e.preventDefault()
   if(city.value !== cityIso) {
      if(city.value.length > 0) {
         cityIso = city.value;
      } else {
         clearCities();
      }
   } else {
      clearCities();
   }
})

let clearCities = () => {
   console.log('Clearing Cities')
   cityIso = '';
   city.length = 0;

}
let clearRegions = () => {
   console.log('Clearing Regions & Cities')
   regionIso = '';
   cityIso = '';
   region.length = 0;
   city.length = 0;

}
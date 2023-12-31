import * as Location from './modAPIs.js';

var key = countryConfig.KEY;
var host = countryConfig.HOST;

const wToSelect = document.getElementById('selectDestination');
const regSelect = document.getElementById('selectRegion');
const citySelect = document.getElementById('selectCity');

const country = document.getElementById('selectDestination');
const region = document.getElementById('selectRegion');
const city = document.getElementById('selectCity');
const images = document.getElementById('images');

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
   e.preventDefault();
   if(country.value !== countryIso) {
      if(country.value.length > 0) {
         countryIso = country.value;
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

city.addEventListener('change', async (e) => {
   e.preventDefault()
   if(city.value !== cityIso) {
      if(city.value.length > 0) {
         cityIso = city.value;
         Location.getForecast(cityIso);
      } else {
         clearCities();
      }
   } else {
      clearCities();
   }
})

let clearCities = () => {
   cityIso = '';
   city.length = 0;
}

let clearRegions = () => {
   regionIso = '';
   cityIso = '';
   region.length = 0;
   city.length = 0;
}

window.addEventListener('load', (e) => {
   e.preventDefault();
   Location.getImages(images);
})

// let imageNbr = 0;
// let countryIso = 'US';
// let regionIso = 'GA';
// let cityIso = '33.534068, -84.231185';
// const h1 = document.querySelector('h1');
// h1.style.cursor = 'pointer';
// h1.addEventListener('click', () => {
//    let w = Location.getForecast(cityIso);
   // console.log(typeof w)
   // console.log(w)
   // let p = JSON.parse(w)
   // console.log(p)
   // for (let obj in p) {
   //    if (Object.keys(p.a)) {
   //       console.log("JESUS")
   //    }
   //    console.log(Object.values(p))
   // }
//    let x = [w]
//    for(let i = 0; i < 13; i++) {
//       console.log(x[i])
//       let para = document.createElement('p');
//       para.textContent += x[i] + '\n'
//       let showWeather = document.getElementById('weather') ;
//       showWeather.prepend(para.innerHTML)
//   }

// })   
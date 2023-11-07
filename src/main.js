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

const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

// let countryIso = '';
// let regionIso = '';
// let cityIso = '';

// if(wToSelect.length === 0) {
//    Location.getCountries(wToSelect);
// }

// async function getStates(country) {
//    const states = await axios.get(`https://country-state-city-search-rest-api.p.rapidapi.com/states-by-countrycode`,
//       {
//          params: {countrycode: country},
//          headers: {
//             'X-RapidAPI-Key': key,
//             'X-RapidAPI-Host': host
//          },
//       }
//    )
//    if(states !== null) {
//       const regionOptionBlank = document.createElement("option");
//       regSelect.appendChild(regionOptionBlank);
//       states.data.forEach((region) => {
//          const regionOption = document.createElement("option");
//          regionOption.text = region.name;
//          regionOption.value = region.isoCode;
//          regSelect.appendChild(regionOption);
//       });
//    }
// }

// async function getCities(country, regionCode) {
//    const cities = await axios.get(`https://country-state-city-search-rest-api.p.rapidapi.com/cities-by-countrycode-and-statecode`,
//       {
//          params: {
//             countrycode: country,
//             statecode: regionCode
//          },
//          headers: {
//             'X-RapidAPI-Key': key,
//             'X-RapidAPI-Host': host
//          },
//       }
//    )
//    if(cities !== null) {
//       const cityOptionBlank = document.createElement("option");
//       citySelect.appendChild(cityOptionBlank);
//       cities.data.forEach((city) => {
//          const cityOption = document.createElement("option");
//          cityOption.text = city.name;
//          cityOption.value = city.latitude.concat(',').concat(city.longitude);
//          // console.log(cityOption.value)
//          citySelect.appendChild(cityOption);
//       });
//    }
// }

// country.addEventListener('change', async (e) => {
//    e.preventDefault();
//    if(country.value !== countryIso) {
//       if(country.value.length > 0) {
//          countryIso = country.value;
//          clearRegions();
//          getStates(countryIso);
//       } else {
//          countryIso = '';
//          clearRegions();
//       }
//    } else {
//       countryIso = '';
//       clearRegions();
//    }
// })

// region.addEventListener('change', async (e) => {
//    e.preventDefault();
//    if(region.value !== regionIso) {
//       if(region.value.length > 0) {
//          regionIso = region.value;
//          clearCities();
//          getCities(countryIso, regionIso)
//       } else {
//          clearRegions();
//       }
//    } else {
//       clearRegions();
//    }
// })

// city.addEventListener('change', async (e) => {
//    e.preventDefault()
//    if(city.value !== cityIso) {
//       if(city.value.length > 0) {
//          cityIso = city.value;
//          // let curWeather = Location.getForecast(cityIso)
//          const curWeather = Location.getForecast(cityIso);
//          console.log(curWeather)
//          //    for(let w = 0; w < curWeather.length; w++) {


//          //    }
//          console.log(curWeather.data.conditon)
//          console.log(curWeather.data.location)
//       } else {
//          clearCities();
//       }
//    } else {
//       clearCities();
//    }
// })

// let clearCities = () => {
//    cityIso = '';
//    city.length = 0;
// }

// let clearRegions = () => {
//    regionIso = '';
//    cityIso = '';
//    region.length = 0;
//    city.length = 0;

// }

// let imageNbr = 0;
let countryIso = 'US';
let regionIso = 'GA';
let cityIso = '33.534068, -84.231185';
const h1 = document.querySelector('h1');
h1.style.cursor = 'pointer';
h1.addEventListener('click', () => {
   const curWeather = Location.getForecast(cityIso);
   console.log(curWeather)
   console.log(curWeather[0]);

   // para.textContent = curWeather[0];
   // para.textContent += curWeather[1];
   // para.textContent += curWeather[2];
   // para.textContent += curWeather[3];
   // para.textContent += curWeather[4];
   // para.textContent += curWeather[5];
   // para.textContent += curWeather[6];
   // para.textContent += curWeather[7];
   // para.textContent += curWeather[8];
   // para.textContent += curWeather[9];
   // para.textContent += curWeather[10];
   // para.textContent += curWeather[11];
   // para.textContent += curWeather[12];
   // console.log(curWeather[0]);
   // console.log(curWeather[1]);
   // console.log(curWeather[2]);
   // console.log(curWeather[3]);
   // console.log(curWeather[4]);
   // console.log(curWeather[5]);
   // console.log(curWeather[6]);
   // console.log(curWeather[7]);
   // console.log(curWeather[8]);
   // console.log(curWeather[9]);
   // console.log(curWeather[10]);
   // console.log(curWeather[11]);
   // console.log(curWeather[12]);
   // para.appendChild(curWeather[0]);
   // para.appendChild(curWeather[1]);
   // para.appendChild(curWeather[2]);
   // para.appendChild(curWeather[3]);
   // para.appendChild(curWeather[4]);
   // para.appendChild(curWeather[5]);
   // para.appendChild(curWeather[6]);
   // para.appendChild(curWeather[7]);
   // para.appendChild(curWeather[8]);
   // para.appendChild(curWeather[9]);
   // para.appendChild(curWeather[10]);
   // para.appendChild(curWeather[11]);
   // para.appendChild(curWeather[12]);
})      

window.addEventListener('load', (e) => {
   e.preventDefault();
   localStorage.setItem('HobsonSba308a', 0);
   Location.getImages(0, images);
})

leftBtn.addEventListener('click', (e) => {
   Location.getImages(1, images);
})
rightBtn.addEventListener('click', (e) => {
   Location.getImages(2, images);
})
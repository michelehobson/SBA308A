var key = countryConfig.KEY;
var host = countryConfig.HOST;
const selection = document.querySelector('select');

// import axios from './axios';
// capital, countryCode, fipsCode, isoCode, name, numcities, numPlaces, wikiDataId

// Countries
// Returns Countries
export async function getCountries(prefix) {
    const countries = await axios.get(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries`,
        {
            headers: {
                'X-RapidAPI-Key': key,
                'X-RapidAPI-Host': host
            },
            params: {
                params: {namePrefix: prefix},
            },
        }
    )
    // console.log(countries.data)

    return countries.data;
    // try {
    //     const response = await axios.request(countries);
    //     console.log(response.data);
    // } catch(error) {
    //     console.log(error);
    // }
}

// Country Details
// capital, code, callingCode, currencyCode, flagImageUrl, name, numRegions, wikiDataId
export async function getDemographics(country) {
    const demographics = {
        method: 'GET',
        url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${country}`,
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };

    try {
        const response = await axios.request(demographics);
        console.log(response.data);
    } catch(error) {
        console.error(error);
    }
}

// Country Regions
// Returns States
// countryCode, fipsCode, isoCode, name, wikiDataId
export async function getStates(country) {
    const states = {
        method: 'GET',
        url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${country}/regions`,
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };

    try {
        const response = await axios.request(states);
        console.log(response.data);
    } catch(error) {
        console.error(error);
    }
}

// Country Region Cities
// id, wikiDataId, type, city, name, longitude, latitude, population
// namePrefix pulled in specific city
export async function getCities(country, regionCode, city) {
    const cities = {
        method: 'GET',
        url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${country}/regions/${regionCode}/cities`,
        params: {
            namePrefix: city
        },
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };

    try {
        const response = await axios.request(cities);
        console.log(response.data);
    } catch(error) {
        console.error(error);
    }
}

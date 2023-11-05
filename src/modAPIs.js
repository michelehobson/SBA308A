var demoKey = countryConfig.KEY;
var demoHost = countryConfig.HOST;
export async function getCountries(wToSelect) {
    const countries = await axios.get(`https://country-state-city-search-rest-api.p.rapidapi.com/allcountries`,
        {
            headers: {
                'X-RapidAPI-Key': demoKey,
                'X-RapidAPI-Host': demoHost
            },
        }
    )
    if(countries !== null) {
        console.log('countries !== null')
        const countryOptionBlank = document.createElement("option");
        wToSelect.appendChild(countryOptionBlank);
        countries.data.forEach((region) => {
            const countryOption = document.createElement("option");
            countryOption.text = region.name;
            countryOption.value = region.isoCode;
            wToSelect.appendChild(countryOption);
        });
    }
}

var weathKey = weatherConfig.KEY;
var weathHost = weatherConfig.HOST;
export async function getForecast(coordinates) {
    const weather = await axios.get(`https://weatherapi-com.p.rapidapi.com/current.json`,
        {
            params: {
                q: coordinates
            },
            headers: {
                'X-RapidAPI-Key': weathKey,
                'X-RapidAPI-Host': weathHost
            },
        }
    )
    return weather;
}


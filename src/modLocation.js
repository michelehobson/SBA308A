var key = countryConfig.KEY;
var host = countryConfig.HOST;

export async function getCountries(wToSelect) {
    const countries = await axios.get(`https://country-state-city-search-rest-api.p.rapidapi.com/allcountries`,
        {
            headers: {
                'X-RapidAPI-Key': key,
                'X-RapidAPI-Host': host
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



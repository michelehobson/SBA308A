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

var pexelKey = pexelConfig.KEY;
export async function getImages(topic, parent) {
    const client = await axios.get(`https://api.pexels.com/v1/search?query=${topic}&per_page=3&page=26`,
        {
            headers: {
                Authorization: pexelKey
            }
        })

        for(let i = 0; i < 3; i++) {
            const medium = client.data.photos[i].src.medium;
            const artist = client.data.photos[i].photographer;
            const photo = document.createElement('div');
            photo.innerHTML = `<img src=${medium}><figcaption>Photo By ${artist}</figcaption>`
            parent.appendChild(photo);

        }
        console.log(client)
        // console.log(client.data)
        // console.log(client.data.photos[0].src.medium)
        // console.log(client.data.photos[1].src.medium)
        // console.log(client.data.photos[2].src.medium)
}



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
    let w = [
        weather.data.current.condition.text,
        weather.data.current.feelslike_f,
        weather.data.current.gust_mph,
        weather.data.current.humidity,
        weather.data.current.is_day,
        weather.data.current.temp_f,
        weather.data.current.vis_m,
        weather.data.current.wind_degree,
        weather.data.current.wind_dir,
        weather.data.current.wind_mph,
        weather.data.location.tz_id,
        weather.data.location.lat,
        weather.data.location.lon
    ];
    let para = document.createElement('p');
    for(let i = 0; i < 13; i++) {
        para.innerHTML += w[i] + '\n'
    }
    const weather2 = document.getElementById('weather');
    weather2.appendChild(para)

    return w;
}

export async function getImages(parent) {
    const image = [
        'https://images.pexels.com/photos/2028885/pexels-photo-2028885.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5707570/pexels-photo-5707570.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/12196392/pexels-photo-12196392.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/325117/pexels-photo-325117.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ]

        for(let index = 0; index < 4; index++) {
            const photo = document.createElement('div');
            photo.innerHTML = `<img src=${image[index]}>`
            photo.classList.add('gallery' + "img")
            parent.appendChild(photo);
        }
    }
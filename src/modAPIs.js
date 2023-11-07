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
        para.textContent = w[i]
        console.log(w[i]);
    }
    const weather2 = document.getElementById('weather');
    weather2.appendChild(para)

    return w;
}

// var pexelKey = pexelConfig.KEY;
// export async function getImages(parent) {
//     const client = await axios.get(`https://api.pexels.com/v1/search?query=weather&per_page=4&page=80`,
//         {
//             headers: {
//                 Authorization: pexelKey
//             }
//         })

//         for(let i = 0; i < 3; i++) {
//             const medium = client.data.photos[i].src.medium;
//             const artist = client.data.photos[i].photographer;
//             const photo = document.createElement('div');
//             photo.innerHTML = `<img src=${medium}><figcaption>Photo By ${artist}</figcaption>`
//             photo.classList.add('gallery' + "img")

//             parent.appendChild(photo);

//         }
//         console.log(client)
//         // console.log(client.data)
//         // console.log(client.data.photos[0].src.medium)
//         // console.log(client.data.photos[1].src.medium)
//         // console.log(client.data.photos[2].src.medium)
// }
export async function getImages(action, parent) {
    const image = [
        'https://images.pexels.com/photos/2028885/pexels-photo-2028885.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5707570/pexels-photo-5707570.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/38280/monkey-mandril-africa-baboon-38280.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/161913/germany-history-architecture-medieval-161913.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/13174298/pexels-photo-13174298.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5273438/pexels-photo-5273438.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/4215116/pexels-photo-4215116.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/12180254/pexels-photo-12180254.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5273508/pexels-photo-5273508.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/4819830/pexels-photo-4819830.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/4915990/pexels-photo-4915990.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5273636/pexels-photo-5273636.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/4215104/pexels-photo-4215104.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/12196392/pexels-photo-12196392.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/14371008/pexels-photo-14371008.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/10949120/pexels-photo-10949120.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/14801834/pexels-photo-14801834.jpeg?auto=compress&cs=tinysrgb&w=1600', //very long
        'https://images.pexels.com/photos/9726426/pexels-photo-9726426.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/14360965/pexels-photo-14360965.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5007785/pexels-photo-5007785.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/1981526/pexels-photo-1981526.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2161954/pexels-photo-2161954.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2675268/pexels-photo-2675268.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/6551937/pexels-photo-6551937.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2574656/pexels-photo-2574656.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2901212/pexels-photo-2901212.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/12707656/pexels-photo-12707656.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2108831/pexels-photo-2108831.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/4577542/pexels-photo-4577542.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/1121782/pexels-photo-1121782.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2218344/pexels-photo-2218344.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5029795/pexels-photo-5029795.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2179666/pexels-photo-2179666.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2086925/pexels-photo-2086925.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2178175/pexels-photo-2178175.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2662086/pexels-photo-2662086.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/17303165/pexels-photo-17303165/free-photo-of-skeleton-exhibits-inside-oxford-university-museum-of-natural-history.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/3801347/pexels-photo-3801347.jpeg?auto=compress&cs=tinysrgb&w=1600',

    ]

    let indexK = localStorage.getItem('HobsonSba308a');
    let index = parseInt(indexK)
    let next;
    let prev;
    if(index >= 3) {
        prev = index - 4;
        document.getElementById('leftBtn').disabled = false;
    } else {
        document.getElementById('leftBtn').disabled = true;
    }

    if(index <= 57) {
        next = index + 4;
        document.getElementById('rightBtn').disabled = false;
    } else {
        document.getElementById('rightBtn').disabled = true;
    }

    if(action = 1 && document.getElementById('leftBtn').disabled === false) {
        for(index; index > prev; index--) {
            const photo = document.createElement('div');
            photo.innerHTML = `<img src=${image[index]}>`
            photo.classList.add('gallery' + "img")
            parent.appendChild(photo);
        }

    } else {//if (document.getElementById('rightBtn').disabled === false) {
        console.log('INSIDE IF')
        for(index; index < next; index++) {
            const photo = document.createElement('div');
            photo.innerHTML = `<img src=${image[index]}>`
            photo.classList.add('gallery' + "img")
            parent.appendChild(photo);
            console.log('index: ' + index)

        }
    }


    localStorage.setItem('HobsonSba308a', index)
}



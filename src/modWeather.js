var key = weatherConfig.KEY;
var host = weatherConfig.HOST;

export async function getForecast(longitude, latitude) {
    const forecast = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {
            q: `${longitude},${latitude}`,
            days: '3'
          },
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };

    try {
        const response = await axios.request(forecast);
        console.log(response.data);
    } catch(error) {
        console.error(error);
    }
}


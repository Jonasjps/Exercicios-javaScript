const APIKey = 'spobSRFVwKZnrfeSHvL1Btn2HJqNQcNW'

const getCityUrl = cityName => 
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`


const fetchData = async url => {
    try {
        const response = await fetch(url)

        if(!response.ok) {
            throw new Error('Não foi possível obter dados da API.')
        }

        return response.json()
         

    } catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = async cityName => {
    const [weatherData] = await  getCityData(cityName)
    const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${weatherData.Key}?apikey=${APIKey}&language=pt-br`
    const response =  await fetch(weatherUrl)
    return await response.json()
}
getCityWeather('Brasília')
    .then(console.log)
// const getCityWeather = async cityName => {
//     try {
//         const weatherData = await  getCityData(cityName)
//         const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${weatherData.Key}?apikey=${APIKey}`
//         const response = await fetch(weatherUrl)

//         if(!response.ok) {
//             throw new Error('Não foi possível obter dados da API.')
//         }
        
//         const [cityWeather] = await response.json()
//         return cityWeather 
        
//     } catch ({name, message}) {
//         alert(`${name}: ${message}`)
//     }

// }
// getCityWeather('Brasília')
//     .then(console.log)


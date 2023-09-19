const apiKey = 'ADhxNvfFzWhmBXXb6VovcrkD3fRK3fB8'
const baseUrl =  `http://dataservice.accuweather.com`

const cityUrl = cityName => 
    `${baseUrl}/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}&language=pt-br`

const getCityWeather = async cityName => {
    try {
        const url = cityUrl(cityName)
        const response = await fetch(url)

        if(!response.ok) {
            throw Error('Não foi possível obter dados da api.')
        }

        const [cityData] =  await response.json()
        return cityData

    } catch ({name, message}) {
        alert(`${name}: ${message} `)
    }
}

// const getCityWeatherData = async cityName => {
//     try {
//         const cityKey = await getCityWeather(cityName)
//         const weatherUrl = `${baseUrl}/currentconditions/v1/${cityKey.Key}?apikey=${apiKey}&q=${cityName}&language=pt-br`
//         const response  = await fetch(weatherUrl)

//         if(!response.ok) {
//             throw Error('Não foi possível obter dados da API.')
//         }

//         const [weatherData] = await response.json()
//         return weatherData        
        
//     }catch ({name, message}) {
//         alert(`${name}: ${message}`)
//     }
// }

getCityWeather('São Paulo')
    .then(console.log)
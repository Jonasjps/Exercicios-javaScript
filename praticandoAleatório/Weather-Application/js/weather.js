const apiKey = 'ADhxNvfFzWhmBXXb6VovcrkD3fRK3fB8'

const cityUrl = cityName => 
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`

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

const getCityWeatherData = async cityName => {
    try {
        const cityKey = await getCityWeather(cityName)
        const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey.Key}?apikey=${apiKey}&q=${cityName}&languate=pt-br`
        const response  = await fetch(weatherUrl)

        if(!response.ok) {
            throw Error('Não foi possível obter dados da API.')
        }

        const weatherData = await response.json()
        return weatherData        
        
    }catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}

getCityWeatherData('São Paulo')
    .then(console.log)
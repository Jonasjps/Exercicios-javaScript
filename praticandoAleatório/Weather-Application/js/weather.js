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

        const cityData =  await response.json()
        return cityData

    } catch ({name, message}) {
        alert(`${name}: ${message} `)
    }
}

getCityWeather('São Paulo')
    .then(console.log)
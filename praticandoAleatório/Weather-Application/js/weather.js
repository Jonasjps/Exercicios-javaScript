const apiKey = 'ADhxNvfFzWhmBXXb6VovcrkD3fRK3fB8'
const baseUrl =  `http://dataservice.accuweather.com`

const cityUrl = cityName => 
    `${baseUrl}/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}&language=pt-br`

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if(!response.ok) {
            throw Error('Não foi possível obter dados da api.')
        }

        return await response.json()
        
    } catch ({name, message}) {
        alert(`${name}: ${message} `)
    }
}

const getCityWeather = cityName => fetchData(cityUrl(cityName))

const getCityWeatherData = async cityName => {
    const [cityKey] = await getCityWeather(cityName)
    const weatherUrl = `${baseUrl}/currentconditions/v1/${cityKey.Key}?apikey=${apiKey}&q=${cityName}&language=pt-br`
    return await fetchData(weatherUrl)
    
}

getCityWeatherData('São Paulo')
    .then(console.log)
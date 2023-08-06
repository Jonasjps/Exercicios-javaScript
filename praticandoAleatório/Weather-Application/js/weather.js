const APIKey = 'spobSRFVwKZnrfeSHvL1Btn2HJqNQcNW'

const getCityUrl = cityName => 
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`


const getCityData = async cityName => {
    try {
        const cityUrl = getCityUrl(cityName)
        const response = await fetch(cityUrl)

        if(!response.ok) {
            throw new Error('Não foi possível obter dados da API.')
        }

        const [cityData] = await response.json()
        return cityData

    } catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}

const getCityWeather = async cityName => {
 try {
    const weatherData = await  getCityData(cityName)
    const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${weatherData.Key}?apikey=${APIKey}`
    const response = await fetch(weatherUrl)

    if(!response.ok) {
        throw new Error('Não foi possível obter dados da API.')
    }
    
    const [cityWeather] = await response.json()
    return cityWeather 
    
 } catch ({name, message}) {
    alert(`${name}: ${message}`)
 }

}
getCityWeather('Brasília')
    .then(console.log)


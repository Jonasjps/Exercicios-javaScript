const ApiKey = 'ADhxNvfFzWhmBXXb6VovcrkD3fRK3fB8'

const cityUrl = cityName => 
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ApiKey}&q=${cityName}`

const weatherUrl = cityKey =>
    `http://dataservice.accuweather.com/currentconditions/v1/${cityKey.Key}?apikey=${ApiKey}&q${cityKey.LocalizedName}&language=pt-br`

const fetchData = async url => {
    try{

        const response = await fetch(url) 

        if(!response.ok) {
            throw new Error('Não foi Possível obter dados da api.')
        }

        return await response.json()

    }catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}
const getCityWeather = cityName => fetchData(cityUrl(cityName))
const getCityWeatherData = async cityName => {
    const [cityKey] = await getCityWeather(cityName)
    return await fetchData(weatherUrl(cityKey)) 
}


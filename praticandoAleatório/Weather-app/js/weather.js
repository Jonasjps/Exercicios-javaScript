const APIKey = 'jeX3bizd50163PRC3spxhyFJThOEvCYp'
const baseUrl = 'http://dataservice.accuweather.com'

const getCityUrl = cityName =>
     `${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityWeatherUrl = (Key) =>
     `${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
    try {
        const response = await fetch(url)
        
        if(!response.ok) {
            throw Erro('Não foi possível obter dados da api.')
        }
        return await response.json()

    }catch ({name, mensage}) {
        alert(`${name}: ${mensage}`)
    }
}

const cityWeather = cityName => fetchData(getCityUrl(cityName))
const cityWeatherData = async cityName => {
    const [{Key}] = await cityWeather(cityName)
    return fetchData(getCityWeatherUrl(Key))
}

    cityWeatherData('Brasília')
        .then(console.log)
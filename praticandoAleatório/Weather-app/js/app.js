const APIKey = 'jeX3bizd50163PRC3spxhyFJThOEvCYp'
const baseUrl = 'http://dataservice.accuweather.com'

const getCityUrl = cityName =>
     `${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityWeatherUrl = ({Key}) =>
     `${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}`

const getCityWeather = async cityName => {
    try {
        const cityUrl = getCityUrl(cityName)
        const response = await fetch(cityUrl)
        
        if(!response.ok) {
            throw Erro('Não foi possível obter dados da api.')
        }
        const [cityData] = await response.json()
        return cityData

    }catch ({name, mensage}) {
        alert(`${name}: ${mensage}`)
    }
} 

const getCityWeatherData = async cityName => {
    try {
        const cityWeatherData = await getCityWeather(cityName)
        const response = await fetch(getCityWeatherUrl(cityWeatherData))
        if(!response.ok) {
            throw Erro('Não foi possível obter dados da api.')
        }
        const [weatherData] = await response.json()
        return weatherData
        
    }catch ({name, mensage}) {
        alert(`${name}: ${mensage}`)
    }
}


getCityWeatherData('Brasília')
    .then(console.log)
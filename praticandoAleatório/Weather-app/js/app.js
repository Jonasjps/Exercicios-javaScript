const APIKey = 'jeX3bizd50163PRC3spxhyFJThOEvCYp'

const getCityUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

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


getCityWeather('Brasília')
    .then(console.log)
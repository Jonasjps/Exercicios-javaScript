const APIKey = 'TxMLcmO9ejDxFAc6IU72OXANfHAMU7f7'

const getCityWeather = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const cityWeather = async cityName => {
    try {
        const cityUrl = getCityWeather(cityName)
        const response = await fetch(cityUrl)

        if(!response.ok) {
            throw Error('Não foi possível obter dados da API.')
        }

        const [cityData] = await response.json()
        return cityData
        
    }catch ({name, mensage}) {
        alert(`${name}: ${mensage}`)
    }
} 



cityWeather('Brasília')
     .then(console.log)
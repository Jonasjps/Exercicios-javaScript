const APIKey = 'b6S3NQTmjOfmH75Zwy3OMPYe8stAJYNr'

const getUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const cityWeather = async cityName => {
    try{
        const cityUrl = getUrl(cityName)
        const response = await fetch(cityUrl)
        
        if(!response.ok) {
            throw Error('Não foi possivel obter dados da api.')
        }

        const [cityData] = await response.json()
        return cityData
        
    } catch ({name, mensage}) {
        alert(`${name} : ${mensage}`)
    }
}

cityWeather('Brasília')
    .then(console.log)


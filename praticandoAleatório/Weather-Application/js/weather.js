const APIKey = 'b6S3NQTmjOfmH75Zwy3OMPYe8stAJYNr'

const getUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
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

const getCityWeather = async cityName => {
    try{
        const {Key, LocalizedName} = await getCityData(cityName)
        const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&q=${cityName}&language=pt-br` 
        const response =  await fetch(weatherUrl)

        if(!response.ok) {
            throw Error('Não foi possivel obter dados da API.')
        }

        const [weatherData] = await response.json()
        return weatherData
    
    } catch ({name, mensage}) {
        alert(`${name} : ${mensage}`)
    }
}


getCityWeather('Brasília')
    .then(console.log)


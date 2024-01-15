const APIKey = 'b6S3NQTmjOfmH75Zwy3OMPYe8stAJYNr'

const getCityUrl = cityName =>
     `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityWeatherUrl = ({Key}) => 
    `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br` 

const fetchData = async url => {
    try{
        const response = await fetch(url)
        
        if(!response.ok) {
            throw Error('Não foi possivel obter dados da api.')
        }

        return await response.json()
        
    } catch ({name, mensage}) {
        alert(`${name} : ${mensage}`)
    }
}

const getCityWeather = cityName => fetchData(getCityUrl(cityName))

const getCityWeatherData = async cityName => {
    const [cityData] = await getCityWeather(cityName)
    return  fetchData(getCityWeatherUrl(cityData))
}



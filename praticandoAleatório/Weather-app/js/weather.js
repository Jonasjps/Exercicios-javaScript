const APIKey = 'TxMLcmO9ejDxFAc6IU72OXANfHAMU7f7'
const baseUrl = 'http://dataservice.accuweather.com'

const getCityWeather = cityName => 
    `${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityWeatherData = ({Key}) =>
    `${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if(!response.ok) {
            throw Error('Não foi possível obter dados da API.')
        }

        return await response.json()
        
        
    }catch ({name, mensage}) {
        alert(`${name}: ${mensage}`)
    }
} 

const cityWeather = cityName => fetchData(getCityWeather(cityName))

const cityWeatherData = async cityName => {
    const [cityData] = await cityWeather(cityName)
    return fetchData(getCityWeatherData(cityData))
}


const APIKey = 'TxMLcmO9ejDxFAc6IU72OXANfHAMU7f7'

const getCityWeather = cityName => 
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityWeatherData = ({Key}) =>
    `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

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

const cityWeatherData = async cityName => {
    try{
        const cityKey = await cityWeather(cityName)
        const response = await fetch(getCityWeatherData(cityKey))
        
        if(!response.ok) {
            throw Error('Não foi posssível obter dados da API.')
        }

        const weatherData = await response.json()
        return weatherData

     }catch({name, mensage}) {
        alert(`${name}: ${mensage}`)
    }

}


cityWeatherData('Brasília')
     .then(console.log)
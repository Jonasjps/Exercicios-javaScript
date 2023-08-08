const APIKey = 'erMQOfcekLj9l1dqh7pwjhZZshUtqV52'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName =>
    `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityWeatherUrl = ({Key}) =>
`${baseUrl}currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
    try {
        const response = await fetch(url)
        
        if(!response.ok) {
            throw new Error('Não foi possível obter dados da API!')
        }

        return await response.json()
       
    } catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = async cityName => {
    const [cityWeather] = await getCityData(cityName)
    return await fetchData(getCityWeatherUrl(cityWeather))
}


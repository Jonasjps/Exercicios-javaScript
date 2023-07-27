const APIKey = 'EAAHXMAts5bmjrZK3rRb9W8d4BjzkQkj'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = CityName =>
    `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${CityName}`

const getWeatherUrl = ({Key}) =>
    `${baseUrl}currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-Br`  

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if(!response.ok) {
            throw new Error('Não foi possível obter dados.')
        }

        return response.json()
    }catch ({name, message}) {
        alert(`${name} ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName)) 

const getCityWeather = async cityName => {
    const [cityData] = await getCityData(cityName)
    return fetchData(getWeatherUrl(cityData))    
}
getCityWeather('São paulo')
    .then(console.log)

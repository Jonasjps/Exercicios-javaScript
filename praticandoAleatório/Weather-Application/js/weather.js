const APIKey = 'G5C56jz2yBuF6ExHvWQnb8rQTldkPcU7'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName =>
    `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityWeatherUrl = (cityKey) =>
    `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
    try {
        const response = await fetch(url)
       
        if(!response.ok) {
            throw new Error('Não foi possível obter dados.')
        }

        return await response.json()

    } catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))
const getCityWeather = cityKey => fetchData(getCityWeatherUrl(cityKey))

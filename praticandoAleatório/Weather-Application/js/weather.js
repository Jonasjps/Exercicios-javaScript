const APIkey = 'zH9PDMh6F4A2NhKoQ3cYezmmvAN8SoQU'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName => 
   `${baseUrl}locations/v1/cities/search?apikey=${APIkey}&q=${cityName}`

const getWeatherUrl = ({Key}) =>
  `${baseUrl}currentconditions/v1/${Key}?apikey=${APIkey}&language=pt-br`

const getData = async url => {
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

const getCityData = cityName => getData(getCityUrl(cityName))

const getCityWeather = async cityName => {
  const [weatherData] = await getCityData(cityName)
  return await getData(getWeatherUrl(weatherData))
}

getCityWeather('Brasília')
  .then(console.log)
  
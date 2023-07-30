const APIkey = 'zH9PDMh6F4A2NhKoQ3cYezmmvAN8SoQU'

const cityDataUrl = cityName =>
   `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIkey}&q=${cityName}` 


const getCityData = async cityName => {
  try {
    const cityUrl = cityDataUrl(cityName)
    const response = await fetch(cityUrl)

    if(!response.ok) {
      throw new Error('Não foi possível obter dados da API')
    }
    const [cityData] = await response.json()
    return cityData

  } catch ({name, message}) {
    alert(`${name}: ${message}`)
  }
}

const getCityWeather = async cityName => {
  try {
    const {Key} = await getCityData(cityName) 
    const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIkey}&language=pt-br`
    const response = await fetch(weatherUrl)
    const [weatherData] = await response.json()
    return weatherData
  } catch ({name, message}) {
    alert(`${name}: ${message}`)
  }
}

getCityWeather('Brasília')
  .then(console.log)
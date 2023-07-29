const APIKey = 'PyeBNPXTFvCPegzzt4xQ0hrTsa7THJbs'
const getCityUrl = cityName =>
   `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCity = async cityName => {
  try {
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl)

    if(!response.ok) {
      throw new Error('Não foi possível obter dados da API')
    }

    const [cityData] = await response.json()
    return cityData

  }catch ({name, message}) {
    alert(`${name}: ${message}`)
  }
}

const getWeatherCity = async cityName => {
  try {
    const {Key} = await getCity(cityName)
    const getWeather = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`
    const response = await fetch(getWeather)

    if(!response.ok) {
      throw new Error('Não foi possível obter dados da API')
    }

    const [weatherCityData] = await response.json()
    console.log(weatherCityData)

  }catch ({name, message}) {
    alert(`${name}: ${message}`)
  }
}

 getWeatherCity('Brasília')

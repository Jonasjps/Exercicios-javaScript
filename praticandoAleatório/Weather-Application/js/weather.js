const APIkey = 'EvzSjxNGDc36JaOA7MxsbG8xAypXXHBW'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityDataUrl = cityName =>
   `${baseUrl}locations/v1/cities/search?apikey=${APIkey}&q=${cityName}` 

const getCityWeatherDataUrl = (cityKey) => 
`${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIkey}&language=pt-br`

const fetchData = async cityName => {
  try {
    const response = await fetch(cityName)

    if(!response.ok) {
      throw new Error('Não foi possível obter dados da API')
    }

    return  await response.json()
    
  } catch ({name, message}) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = cityName => fetchData(getCityDataUrl(cityName))
const getCityWeather = cityKey => fetchData(getCityWeatherDataUrl(cityKey))



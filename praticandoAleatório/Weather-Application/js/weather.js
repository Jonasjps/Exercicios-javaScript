const APIkey = 'zH9PDMh6F4A2NhKoQ3cYezmmvAN8SoQU'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityDataUrl = cityName =>
   `${baseUrl}locations/v1/cities/search?apikey=${APIkey}&q=${cityName}` 

const getCityWeatherDataUrl = ({ Key }) => 
`${baseUrl}currentconditions/v1/${Key}?apikey=${APIkey}&language=pt-br`

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

const getCityWeather = async cityName => {
  const [cityData] = await getCityData(cityName) 
  return await fetchData(getCityWeatherDataUrl(cityData))
}


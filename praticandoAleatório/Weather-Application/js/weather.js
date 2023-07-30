const APIkey = 'zH9PDMh6F4A2NhKoQ3cYezmmvAN8SoQU'

const cityDataUrl = cityName =>
   `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIkey}&q=${cityName}` 


const getCityData = async cityName => {
  try {
    const  cityUrl = cityDataUrl(cityName)
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

getCityData('Brasília')
  .then(console.log)
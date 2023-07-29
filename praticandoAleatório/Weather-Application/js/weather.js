const APIkey = 'PyeBNPXTFvCPegzzt4xQ0hrTsa7THJbs'

const getCityUrl = cityName =>
   `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIkey}&q=${cityName}`

const getCityData = async cityName => {
  try {
    const cityUrl = getCityUrl(cityName) 
    const response = await fetch(cityUrl)
    const [cityData] =  await response.json()
    
    if(!response.ok) {
      throw new Error('Não foi possível obter dados da API.')
    }
    
   return cityData
  } catch ({name, message}) {
    alert(`${name}: ${message}`)
  }
}

getCityData('Brasília')
  .then(console.log)
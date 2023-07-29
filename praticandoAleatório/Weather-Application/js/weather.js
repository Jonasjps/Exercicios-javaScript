const APIKey = 'PyeBNPXTFvCPegzzt4xQ0hrTsa7THJbs'
const cityUrl = cityName =>
   `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName
}`

const getCityUrl = async cityName => {

  try {
    const response = await fetch(cityUrl(cityName))

    if(!response.ok) {
      throw new Error('Não foi possível obter dados da API')
    }

    const [cityData] = await response.json()
    console.log(cityData)
    
  } catch ({name, message})  {
    alert(`${name}: ${message}`)
  }
}

getCityUrl('Brasília')
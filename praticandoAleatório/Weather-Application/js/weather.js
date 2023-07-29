const APIkey = 'PyeBNPXTFvCPegzzt4xQ0hrTsa7THJbs'

const getCityUrl = cityName => 
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIkey}&q=${cityName}`

const getCity = async cityName => {

  try{
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl)
    const [cityData] = await response.json() 
    return cityData
     
    if(!response.ok) {
      throw new Error('Não foi possível obter dados da API.')
    }

  }catch ({name, message}) {
    alert(`${name}: ${message}`)
  }
}

const getWeather = async cityName => {

  try {
    const {Key} = await getCity(cityName) 
    const weatherUlr = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIkey}&language=pt-br`
    const response = await fetch(weatherUlr)
    const [weatherDataUrl] = await response.json()
    console.log(weatherDataUrl)
  }catch ({name, message}) {
    alert(`${name}: ${message}`)
  }
}

getWeather('Brasília')
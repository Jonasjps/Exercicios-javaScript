const APIKey = 'EvzSjxNGDc36JaOA7MxsbG8xAypXXHBW'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName =>
   `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const fetchData = async url => {
  try {
    const response = await fetch(url)

    if(!response.ok) {
      throw new Error('Não foi possível obter dados da API.')
    }

    return await response.json()
  
  } catch ({name, message}) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = async cityName => {
  const [{Key}] = await getCityData(cityName)
  const weatherUrl = `${baseUrl}currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`
  return await fetchData(weatherUrl)
}

getCityWeather('Brasília')
  .then(console.log)

// const getCityWeather = async cityName => {
//   try {
//     const {Key} = await getCityData(cityName)
//     const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`
//     const response = await fetch(weatherUrl)
    
//     if(!response.ok){
//       throw new Error('Não foi possível obter dados da API.')
//     } 

//     const [weatherData] = await response.json()
//     return weatherData

//   } catch ({name, message}) {
//     alert(`${name}: ${message}`)
//   }
// }

// getCityWeather('Brasília')
//   .then(console.log)
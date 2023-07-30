const APIkey = 'zH9PDMh6F4A2NhKoQ3cYezmmvAN8SoQU'

const getCityUrl = cityName =>
   `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIkey}&q=${cityName}`

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
  const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${weatherData.Key}?apikey=${APIkey}&language=pt-br`
  return await getData(weatherUrl)
}

getCityWeather('Brasília')
  .then(console.log)
// const getCityWeather = async cityName => {
//   try {
//     const {Key} = await getCityData(cityName)
//     const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIkey}&language=pt-br`
//     const response = await fetch(weatherUrl)
    
//     if(!response.ok) {
//       throw new Error('Não foi possível obter dados.')
//     }

//     const [weatherData] = await response.json()
//     return weatherData

//   } catch ({name, message}) {
//     alert(`${name}: ${message} `)
//   }
// }

// getCityWeather('Brasília')
//   .then(console.log)
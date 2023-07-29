const APIkey = 'PyeBNPXTFvCPegzzt4xQ0hrTsa7THJbs'

const getCityUrl = cityName => 
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIkey}&q=${cityName}`

const getData = async url => {

  try{
    const response = await fetch(url)
    
    if(!response.ok) {
      throw new Error('Não foi possível obter dados da API.')
    }
    return await response.json() 
  
  }catch ({name, message}) {
    alert(`${name}: ${message}`)
  }
}

const getCity = cityName => getData(getCityUrl(cityName))
getCity('Brasília')
// const getWeather = async cityName => {

//   try {
//     const {Key} = await getCity(cityName) 
//     const weatherUlr = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIkey}&language=pt-br`
//     const response = await fetch(weatherUlr)
//     const [weatherDataUrl] = await response.json()
//     console.log(weatherDataUrl)
//   }catch ({name, message}) {
//     alert(`${name}: ${message}`)
//   }
// }

// getWeather('Brasília')
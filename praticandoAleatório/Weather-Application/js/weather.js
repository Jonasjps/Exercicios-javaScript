const APIKey = 'xt6BOTgFyMi3NEx6MKeVzabJluEXuAG6'

const cityUrl = cityName => 
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const fetchData = async url => {
    try{

        const response = await fetch(url)

        if(!response.ok) {
            throw Error('Não foi possível obter dados da api.')
        }

        return await response.json()

    }catch ({name, mesage}) {
        alert(`${name}: ${mesage}`)
    }
}

const getCityData = cityName => fetchData(cityUrl(cityName))

// const getCityWeather = async cityName => {
//     try {
//         const [cityWeatherData] = await getCityData(cityName)
//         const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${cityWeatherData.Key}?apikey=${APIKey}&language=pt-br`
//         const response = await fetch(weatherUrl)

//         if(!response.ok) {
//             throw Error('Não foi possível obter dados da api!')
//         }

//         const [weatherData] = await response.json()
//         return weatherData
        
//     } catch ({name , mesage}) {
//         alert(`${name}: ${mesage}`)
//     }
// }

getCityData('Brasília')
    .then(console.log)
const APIKey = 'EAAHXMAts5bmjrZK3rRb9W8d4BjzkQkj'

const getCityUrl = CityName =>
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${CityName}`

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if(!response.ok) {
            throw new Error('Não foi possível obter dados.')
        }

        return response.json()
    }catch ({name, message}) {
        alert(`${name} ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName)) 

const getCityWeather = async cityName => {
    const [cityData] = await getCityData(cityName)
    const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${APIKey}&language=pt-Br`
    return fetchData(cityWeatherUrl)    
}
getCityWeather('São paulo')
    .then(console.log)
// getCityData('São paulo')
//     .then(console.log)





// const getCityWeatherUrl = async (cityName) => {
//     try {
//         const {Key} = await getCityData(cityName)
//         const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-Br`
//         const response = await fetch(cityWeatherUrl)

//         if(!response.ok) {
//             throw new Error('Não foi possível obter dados.')
//         }

//         const [cityWeatherData] = await response.json()
//         debugger
//         return cityWeatherData
//     }catch ({name, message}) {
//         alert(`${name} ${message}`)
//     }
// }

//     getCityWeatherUrl('Brasilia')
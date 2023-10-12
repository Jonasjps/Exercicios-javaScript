const APIKey = 'xt6BOTgFyMi3NEx6MKeVzabJluEXuAG6'

const cityUrl = cityName => 
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
    try{
        const url = cityUrl(cityName)
        const response = await fetch(url)

        if(!response.ok) {
            throw Error('Não foi possível obter dados da api.')
        }

        const cityData = await response.json()
        return cityData

    }catch ({name, mesage}) {
        alert(`${name}: ${mesage}`)
    }
}

const getCityWeather = async cityName => {
    try {
        const [{Key, LocalizedName}] = await getCityData(cityName)
        const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`
        const response = await fetch(weatherUrl)

        if(!response.ok) {
            throw Error('Não foi possível obter dados da api!')
        }

        const weatherData = await response.json()
        return weatherData
        
    } catch ({name , mesage}) {
        alert(`${name}: ${mesage}`)
    }
}

getCityWeather('Brasília')
    .then(console.log)
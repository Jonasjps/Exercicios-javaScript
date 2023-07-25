const APIKey = 'EAAHXMAts5bmjrZK3rRb9W8d4BjzkQkj'

const getCityUrl = CityName =>
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${CityName}`

const getCityData = async cityName => {
    try {
        const cityUrl = getCityUrl(cityName)
        const response = await fetch(cityUrl)

        if(!response.ok) {
            throw new Error('Não foi possível obter dados.')
        }

        const [cityData] = await response.json()
        return cityData
    }catch ({name, message}) {
        alert(`${name} ${message}`)
    }
}

const getCityWeatherUrl = async (cityName) => {
    try {
        const {Key} = await getCityData(cityName)
        const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`
        const response = await fetch(cityWeatherUrl)

        if(!response.ok) {
            throw new Error('Não foi possível obter dados.')
        }

        const [cityWeatherData] = await response.json()
        debugger
        return cityWeatherData
    }catch ({name, message}) {
        alert(`${name} ${message}`)
    }
}

    getCityWeatherUrl('Brasilia')
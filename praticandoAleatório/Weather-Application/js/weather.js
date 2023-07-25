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
        console.log(cityData)
    }catch ({name, message}) {
        alert(`${name} ${message}`)
    }
}

    getCityData('São paulo')
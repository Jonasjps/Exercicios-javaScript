const APIKey = 'PyeBNPXTFvCPegzzt4xQ0hrTsa7THJbs'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = CityName =>
    `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${CityName}`

const getWeatherUrl = cityKey =>
    `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-Br`  

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
const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey))    


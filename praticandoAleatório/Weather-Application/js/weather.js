const APIKey = 'xt6BOTgFyMi3NEx6MKeVzabJluEXuAG6'

const cityUrl = cityName => 
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const cityWeatherUrl = cityKey =>
    `http://dataservice.accuweather.com/currentconditions/v1/${cityKey.Key}?apikey=${APIKey}&language=pt-br` 

const fetchData = async url => {
    try{

        const response = await fetch(url)

        if(!response.ok) {
            throw Error('Não foi possível obter dados da api.')
        }

        return response.json()

    }catch ({name, mesage}) {
        alert(`${name}: ${mesage}`)
    }
}

const getCityData = cityName => fetchData(cityUrl(cityName))

const getCityWeatherData = async cityName => {
    const [cityWeatherData] = await getCityData(cityName)
    return await fetchData(cityWeatherUrl(cityWeatherData))
}

getCityWeatherData('Brasília')
    .then(console.log)

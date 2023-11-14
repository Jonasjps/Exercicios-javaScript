const APIKey = 'TxMLcmO9ejDxFAc6IU72OXANfHAMU7f7'

const getCityWeather = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const fetchData = async url => {
    try {
        
    const response = await fetch(url)

    if(!response.ok) {
        throw Erro('Não foi possível obter Dados da API.')
    }
    return await response.json()

    }catch ({name, mensage}) {
        alert(`${name}: ${mensage}`)
    }

}


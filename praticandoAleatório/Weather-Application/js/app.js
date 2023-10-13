const formInput = document.querySelector('[data-js="change-location"]')
const cityNameContainers = document.querySelector('[data-js="cityName"]')
const cityWeatherContainers = document.querySelector('[data-js="cityWeather"]')
const cityTemperatureContainers = document.querySelector('[data-js="cityTemperature"]')
const cityCard = document.querySelector('[data-js="cityCard"]')

formInput.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    const [{Key, LocalizedName}] = await getCityData(inputValue)
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeatherData(Key)

    if (cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none')
    }
    
    cityNameContainers.innerHTML = LocalizedName
    cityWeatherContainers.innerHTML = WeatherText
    cityTemperatureContainers.innerHTML = Temperature.Metric.Value
    
    formInput.reset()
})
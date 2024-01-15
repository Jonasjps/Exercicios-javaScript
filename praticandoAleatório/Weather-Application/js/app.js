const form = document.querySelector('[data-js="change-location"]')
const cityNameContainers = document.querySelector('[data-js="city-name"]')
const cityWeatherContainers = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainers = document.querySelector('[data-js="city-temperature"]')

form.addEventListener('submit', async event => {
    event.preventDefault()
    const inputForm = event.target.city.value.trim()
    const [{Key, LocalizedName}] = await getCityWeather(inputForm)
    const [{WeatherText, Temperature, IsDayTime}] = await getCityWeatherData(Key)    
    
    console.log(LocalizedName, WeatherText, IsDayTime, Temperature.Metric.Value)
})




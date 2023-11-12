const inputForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="name"]')
const cityWeatherContainer = document.querySelector('[data-js="weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="temperature"]')
const img = document.querySelector('[data-js="time"]')


inputForm.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value.trim()
    const [{Key, LocalizedName}] = await cityWeather(inputValue)
    const [{WeatherText, Temperature, IsDayTime}] =  await cityWeatherData(Key)
    
    if(IsDayTime) {
        img.src ='./src/day.svg'
    } else {
        img.src ='./src/night.svg'
    }

    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value
})
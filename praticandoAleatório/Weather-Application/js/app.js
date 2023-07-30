const cityForm = document.querySelector('[data-js="change-location"]')
const cityData = document.querySelector('[data-js="city-card"]')
const cityNameContainers = document.querySelector('[data-js="city-name"]')
const cityWeatherContainers = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainers = document.querySelector('[data-js="city-temperature"]')
const img = document.querySelector('[data-js="time"]')

cityForm.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    const [{Key, LocalizedName}] = await getCityData(inputValue)
    const [{WeatherText, Temperature, IsDayTime}] = await getCityWeather(Key)

    if(cityData.classList.contains('d-none')) {
        cityData.classList.remove('d-none')
    }

    if(IsDayTime){
        img.src = `./src/day.svg`
    }else {
        img.src = `./src/night.svg`
    }
    

    cityNameContainers.textContent = LocalizedName
    cityWeatherContainers.textContent = WeatherText
    cityTemperatureContainers.textContent = Temperature.Metric.Value


})
const cityForm = document.querySelector('[data-js="change-location"]')
const cityData = document.querySelector('[data-js="city-card"]')
const cityNameContainers = document.querySelector('[data-js="city-name"]')
const cityWeatherContainers = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainers = document.querySelector('[data-js="city-temperature"]')
let img = document.querySelector('[data-js="time"]')
const timeIcon = document.querySelector('[data-js="time-icon"]')


cityForm.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    const [{Key, LocalizedName}] = await getCityData(inputValue)
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeather(Key)
    const Icon = `<img src="./src/icons/${WeatherIcon}.svg"/>`

    if(cityData.classList.contains('d-none')) {
        cityData.classList.remove('d-none')
    }

    if(IsDayTime){
        img.src = `./src/day.svg`
    }else {
        img.src = `./src/night.svg`
    }
    
    timeIcon.innerHTML = Icon
    cityNameContainers.textContent = LocalizedName
    cityWeatherContainers.textContent = WeatherText
    cityTemperatureContainers.textContent = Temperature.Metric.Value

    cityForm.reset()
})
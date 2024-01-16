const form = document.querySelector('[data-js="change-location"]')
const cityNameContainers = document.querySelector('[data-js="city-name"]')
const cityWeatherContainers = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainers = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="cityCard"]')
const cityImg = document.querySelector('[data-js="time"]')
const timeIcon = document.querySelector('[data-js="time-icon]')

form.addEventListener('submit', async event => {
    event.preventDefault()
    const inputForm = event.target.city.value.trim()
    const [{Key, LocalizedName}] = await getCityWeather(inputForm)
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeatherData(Key) 

    if(cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none')
    }

    if(IsDayTime) {
        cityImg.src = './src/day.svg'
    }else {
        cityImg.src = './src/night.svg'
    }
    
    cityNameContainers.innerHTML = LocalizedName
    cityWeatherContainers.innerHTML = WeatherText
    cityTemperatureContainers.innerHTML = Temperature.Metric.Value

    event.target.reset()
})




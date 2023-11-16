const formInput = document.querySelector('[data-js="change-location"]') 
const cityNameContainers = document.querySelector('[data-js="cityName"]')
const cityWeatherContainers = document.querySelector('[data-js="cityWeather"]')
const cityTemperatureContainers = document.querySelector('[data-js="cityTemperature"]')
const time = document.querySelector('[data-js="time"]')
const card = document.querySelector('.card')
const timeIcon = document.querySelector('[data-js="time-icon"]')



formInput.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value.trim()
    const [{Key, LocalizedName}] = await cityWeather(inputValue)
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await cityWeatherData(Key)
    const icon = `<img src="./src/icons/${WeatherIcon}.svg">`

    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }

    if(IsDayTime) {
        time.src = './src/day.svg'
    }else{
        time.src = './src/night.svg'
    }
    timeIcon.innerHTML = icon
    cityNameContainers.textContent = LocalizedName
    cityWeatherContainers.textContent = WeatherText
    cityTemperatureContainers.textContent = Temperature.Metric.Value

    event.target.reset()
}) 
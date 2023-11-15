const formInput = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="cityName"]')
const cityWeatherContainer = document.querySelector('[data-js="cityWeather"]')
const cityTemperatureContainer = document.querySelector('[data-js="cityTemperature"]')
const time = document.querySelector('[data-js="time"]')
const card = document.querySelector('.card')
const timeIcon = document.querySelector('[data-js="time-icon"]')

const addClass = () => {
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }

}

formInput.addEventListener('submit', async event => {
    event.preventDefault() 

    const inputValue = event.target.city.value
    const [{Key, LocalizedName}] = await cityWeather(inputValue)
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await cityWeatherData(Key)
    const icon = `<img src=./src/icons/${WeatherIcon}.svg>`

    addClass()

    IsDayTime 
        ? time.src = './src/day.svg'
        : time.src = './src/night.svg' 

    timeIcon.innerHTML = icon
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value
})
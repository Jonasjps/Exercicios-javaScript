const form = document.querySelector('[data-js="change-location"]')
const cityNameContainers = document.querySelector('[data-js="city-name"]')
const cityWeatherContainers = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainers = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="cityCard"]')
const cityImg = document.querySelector('[data-js="time"]')
const timeIcon = document.querySelector('[data-js="time-icon"]')

const checkingClass = () => {
    if(cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none')
    }
}

const manipulateInToDOM = async inputForm => {
    
    const [{Key, LocalizedName}] = await getCityWeather(inputForm)
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeatherData(Key) 
    const icon = `<img src = "./src/icons/${WeatherIcon}.svg">`

    IsDayTime 
    ? cityImg.src = './src/day.svg'
    : cityImg.src = './src/night.svg'
    
    timeIcon.innerHTML = icon
    cityNameContainers.innerHTML = LocalizedName
    cityWeatherContainers.innerHTML = WeatherText
    cityTemperatureContainers.innerHTML = Temperature.Metric.Value

}

form.addEventListener('submit', async event => {
    event.preventDefault()

    const inputForm = event.target.city.value.trim()
    checkingClass()
    manipulateInToDOM(inputForm)
    form.reset()
})




const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameConteiners = document.querySelector('[data-js="city-name"]')
const cityWeatherConteiners = document.querySelector('[data-js="city-weather"]')
const cityTemperatureConteiners = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const iconTime = document.querySelector('[data-js="time"]')
const iconWeather = document.querySelector('[data-js="time-icon"]')

const checkingClass = () => {
    if(cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none')
    }
}

const manipulateDom = async cityName => {
    const [{Key, LocalizedName}] = await getCityData(cityName)
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeather(Key)
    const icon = `<img src = ./src/icons/${WeatherIcon}.svg />`

    IsDayTime ? iconTime.src= './src/day.svg':iconTime.src='./src/night.svg'

    iconWeather.innerHTML = icon
    cityNameConteiners.textContent = LocalizedName
    cityWeatherConteiners.textContent = WeatherText
    cityTemperatureConteiners.textContent = Temperature.Metric.Value

}

cityForm.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    checkingClass()
    manipulateDom(inputValue)

})
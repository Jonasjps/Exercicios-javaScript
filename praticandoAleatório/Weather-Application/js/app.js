const formInput = document.querySelector('[data-js="change-location"]')
const cityNameContainers = document.querySelector('[data-js="cityName"]')
const cityWeatherContainers = document.querySelector('[data-js="cityWeather"]')
const cityTemperatureContainers = document.querySelector('[data-js="cityTemperature"]')
const cityCard = document.querySelector('[data-js="cityCard"]')
const cityImg = document.querySelector('[data-js="time"]')
const timeIcon = document.querySelector('[data-js="time-icon"]')

const checkingClass = inputValue => {
    
    if(inputValue.length) {
        if (cityCard.classList.contains('d-none')) {
            cityCard.classList.remove('d-none')
        }
    }

}

const manipulationInToDom = async inputValue => {
    const [{Key, LocalizedName}] = await getCityData(inputValue)
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeatherData(Key)
    const imgIcon = `<img src="./src/icons/${WeatherIcon}.svg">`

    IsDayTime 
        ? cityImg.src = './src/day.svg'
        : cityImg.src = './src/night.svg'

    timeIcon.innerHTML = imgIcon
    cityNameContainers.innerHTML = LocalizedName
    cityWeatherContainers.innerHTML = WeatherText
    cityTemperatureContainers.innerHTML = Temperature.Metric.Value

}


formInput.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value

    manipulationInToDom(inputValue)
    checkingClass(inputValue)

    formInput.reset()
})
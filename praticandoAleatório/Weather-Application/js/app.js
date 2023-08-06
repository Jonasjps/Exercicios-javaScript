const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const imageTime = document.querySelector('[data-js="time"]')
const timeIcon = document.querySelector('[data-js="time-icon"]')

cityForm.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    const [{Key, LocalizedName}] = await getCityData(inputValue)
    const ImgIcon = icon(Key)

    const checkingClassOk = cityCard.classList.contains('d-none')

    checkingClassOk && cityCard.classList.remove('d-none')
    
    timeIcon.innerHTML = ImgIcon
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value

    cityForm.reset()
    
    return IsDayTime 
    ? imageTime.src = `./src/day.svg` 
    : imageTime.src = `./src/night.svg`
    
})

const icon = WeatherIcon =>
`<img src =./src/icons/${WeatherIcon}.svg />`
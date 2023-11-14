const inputForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="name"]')
const cityWeatherContainer = document.querySelector('[data-js="weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="temperature"]')
const timeImg = document.querySelector('[data-js="time"]')
const cityCard = document.querySelector('.card')
const icon = document.querySelector('[data-js="time-icon"]')


inputForm.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value.trim()
    const [{Key, LocalizedName}] = await cityWeather(inputValue)
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] =  await cityWeatherData(Key)
    const tagImg = `<img src= "./src/icons/${WeatherIcon}.svg" >`

    if(cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none')
    }
    
    if(IsDayTime) {
        timeImg.src ='./src/day.svg'
    } else {
        timeImg.src ='./src/night.svg'
    }

    icon.innerHTML = tagImg
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value
})
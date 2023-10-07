const form = document.querySelector('[data-js="change-location"]')
const containersName = document.querySelector('[data-js="cityName"]')
const containersWeather = document.querySelector('[data-js="cityWeather"]')
const containersTemperature = document.querySelector('[data-js="cityTemperature"]')
const time = document.querySelector('[data-js="time"]')

form.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    const [{Key, LocalizedName}] = await getCityWeather(inputValue)
    const [{WeatherText, Temperature, isDayTime}] = await getCityWeatherData(Key)

    if(isDayTime) {
        time.src = `./src/day.svg`
    } else {
        time.src = `./src/night.svg`
    }

    containersName.innerHTML = LocalizedName
    containersWeather.innerHTML = WeatherText
    containersTemperature.innerHTML = Temperature.Metric.Value
})
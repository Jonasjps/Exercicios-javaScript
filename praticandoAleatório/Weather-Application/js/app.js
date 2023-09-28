const form = document.querySelector('[data-js="change-location"]')
const containersName = document.querySelector('[data-js="cityName"]')
const containersWeather = document.querySelector('[data-js="cityWeather"]')
const containersTemperature = document.querySelector('[data-js="cityTemperature"]')

form.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    const [{Key, LocalizedName}] = await getCityWeather(inputValue)
    const [{weatherData, WeatherText, Temperature}] = await getCityWeatherData(Key)

    containersName.innerHTML = LocalizedName
    containersWeather.innerHTML = WeatherText
    containersTemperature.innerHTML = Temperature.Metric.Value
})
const form = document.querySelector('[data-js="change-location"]')

form.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    const [{Key, LocalizedName}] = await getCityWeather(inputValue)
    const [{weatherData, WeatherText, Temperature}] = await getCityWeatherData(Key)

    console.log(LocalizedName, WeatherText, Temperature.Metric.Value )

})
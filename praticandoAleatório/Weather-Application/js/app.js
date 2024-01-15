const form = document.querySelector('[data-js="change-location"]')

form.addEventListener('submit', async event => {
    event.preventDefault()
    const inputForm = event.target.city.value.trim()
    const [{Key, LocalizedName}] = await getCityWeather(inputForm)
    const [{WeatherText, Temperature, IsDayTime}] = await getCityWeatherData(Key)    
    
    console.log(LocalizedName, WeatherText, IsDayTime, Temperature.Metric.Value)
})




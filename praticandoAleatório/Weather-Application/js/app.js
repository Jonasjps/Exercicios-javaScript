const formInput = document.querySelector('[data-js="change-location"]')

formInput.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    const [{Key, LocalizedName}] = await getCityData(inputValue)
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeatherData(Key)
    console.log(WeatherText, Temperature, IsDayTime, WeatherIcon)
})
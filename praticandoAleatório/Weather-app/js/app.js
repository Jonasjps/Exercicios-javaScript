const formInput = document.querySelector('[data-js="change-location"]')

formInput.addEventListener('submit', async event => {
    event.preventDefault() 

    const inputValue = event.target.city.value
    const [{Key, LocalizedName}] = await cityWeather(inputValue)
    const weatherData = await cityWeatherData(Key)
     

})
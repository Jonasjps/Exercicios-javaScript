const form = document.querySelector('[data-js="change-location"]')

form.addEventListener('submit', async event => {
    event.preventDefault()
    const inputForm = event.target.city.value.trim()
    const [cityData] = await getCityWeather(inputForm)
    
    console.log(cityData)
})




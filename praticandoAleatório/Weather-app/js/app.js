const formInput = document.querySelector('[data-js="change-location"]') 
const cityNameContainers = document.querySelector('[data-js="cityName"]')
const cityWeatherContainers = document.querySelector('[data-js="cityWeather"]')
const cityTemperatureContainers = document.querySelector('[data-js="cityTemperature"]')
const time = document.querySelector('[data-js="time"]')
const card = document.querySelector('.card')
const timeIcon = document.querySelector('[data-js="time-icon"]')


const removedClass = () => {
    const checkingClass = card.classList.contains('d-none')
    
    if(checkingClass) {
        card.classList.remove('d-none')
    }

} 



const manipulationInToDOM = async inputValue => {
    const [{Key, LocalizedName}] = await cityWeather(inputValue)
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await cityWeatherData(Key)
    const icon = `<img src="./src/icons/${WeatherIcon}.svg">`

    IsDayTime 
        ? time.src = './src/day.svg'
        : time.src = './src/night.svg'
    
    timeIcon.innerHTML = icon
    cityNameContainers.textContent = LocalizedName
    cityWeatherContainers.textContent = WeatherText
    cityTemperatureContainers.textContent = Temperature.Metric.Value
    removedClass()
}

formInput.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.city.value.trim()
    
    manipulationInToDOM(inputValue)
    localStorage.setItem('city', inputValue)
    formInput.reset()
}) 

const city = localStorage.getItem('city')

if(city) {
    removedClass()
    manipulationInToDOM(city)
}
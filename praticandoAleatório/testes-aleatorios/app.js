const getRelogioHours = document.querySelector('[data-js="hours"]')
const getRelogioMinutes = document.querySelector('[data-js="minutes"]')
const getRelogioSeconds = document.querySelector('[data-js="seconds"]')

let counter = 0

const setRelogioDigital = () => {
    const data = new Date()
    let hours = data.getHours()
    let minutes = data.getMinutes()
    let seconds = data.getSeconds()

   
    getRelogioHours.innerHTML = hours
    getRelogioMinutes.innerHTML = minutes
    getRelogioSeconds.innerHTML = seconds
   

                
    // clearInterval(time)

}

setInterval(setRelogioDigital, 1000)

console.log(setRelogioDigital())

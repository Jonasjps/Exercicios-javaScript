const getRelogioHours = document.querySelector('[data-js="hours"]')
const getRelogioMinutes = document.querySelector('[data-js="minutes"]')
const getRelogioSeconds = document.querySelector('[data-js="seconds"]')

const data = new Date()

const setRelogioDigital = () => {
    const hours = data.getHours()
    const minutes = data.getMinutes()
    const seconds = data.getSeconds()

    const time = setInterval(() => {
        console.log(seconds)
    },1000)
    console.log(hours, minutes, seconds)

    // clearInterval(time)

}


console.log(setRelogioDigital())

const clockContainer = document.querySelector('[data-js="clock"]')

const setRelogioDigital = () => {
    const present = new Date()
    let hours = present.getHours()
    let minutes = present.getMinutes()
    let seconds = present.getSeconds()

    const clock = ` 
    <span>${String(hours).length === 1 ? `0${hours}` : hours }</span>:
    <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span>:
    <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
    `
    return clockContainer.innerHTML = clock
}

setInterval(setRelogioDigital, 1000)


const clockContainer = document.querySelector('[data-js="clock"]')


const setRelogioDigital = () => {
    const data = new Date()
    let hours = data.getHours()
    let minutes = data.getMinutes()
    let seconds = data.getSeconds()
    
    const clock = ` 
    <span>${hours}</span>
    <span>${minutes}</span>
    <span>${seconds}</span>
    `
    clockContainer.innerHTML = clock
}

setInterval(setRelogioDigital, 1000)

console.log(setRelogioDigital())

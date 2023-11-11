const clockContainer = document.querySelector('.clock-container')

const clock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()

    const clockHTML =  `
        <span>${hours}</span>
        <span>${minutes}</span>
        <span>${seconds}</span>
    `
    console.log(clockHTML)
}

setInterval(clock, 1000)

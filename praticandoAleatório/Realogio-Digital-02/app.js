const clockContainer = document.querySelector('.clock-container')


const clock = () => {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    const clockTikTok = `
        <span>${hours}<span>:
        <span>${minutes}<span>:
        <span>${seconds}<span>
    `
    return clockContainer.innerHTML = clockTikTok
}



setInterval(() => {
    clock()
},1000)


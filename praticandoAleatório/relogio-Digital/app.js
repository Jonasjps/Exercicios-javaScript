const clockContainer = document.querySelector('.clock-container')



const clockSeconds = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()
   
    const clock = `
    <span>${hours}</span>
    <span>${minutes}</span>
    <span>${seconds}</span>
    `
    
    console.log(clock)
}

const time = setInterval(clockSeconds, 1000)
// clearInterval(time)


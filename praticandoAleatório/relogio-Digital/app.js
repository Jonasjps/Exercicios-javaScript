const clockContainer = document.querySelector('.clock-container')

const present = new Date()

const clockSeconds = () => {
    console.log(present)

}

const time = setInterval(clockSeconds, 1000)
clearInterval(time)


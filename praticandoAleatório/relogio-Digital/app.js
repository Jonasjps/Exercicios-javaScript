const clockContainer = document.querySelector('.clock-container')


const clock = () => {
   const present = new Date()
   const hours = present.getHours()
   const minutes = present.getMinutes()
   const seconds = present.getSeconds()
   
   console.log(hours, minutes, seconds)
}

setInterval(clock, 1000)
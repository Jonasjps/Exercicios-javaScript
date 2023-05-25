const clockContainer = document.querySelector('.clock-container')

const clock = () => {
   const present = new Date()
   const hours = present.getHours()
   const minutes = present.getMinutes()
   const seconds = present.getSeconds()

   const clockHTML = `
   <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
   <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
   <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
   `
  clockContainer.innerHTML = clockHTML
}

setInterval(clock, 1000)

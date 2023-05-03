const present = new Date()

console.log(typeof present, present)
console.log(present.getTime())
console.log(present.getDay())
console.log(present.getFullYear())
console.log(present.getHours())
console.log(present.getMilliseconds())
console.log(present.getSeconds())
console.log(present.getMonth())
console.log(present.getDate())
console.log(present.getMinutes())

console.log(present.toDateString())
console.log(present.toLocaleString())
console.log(present.toLocaleDateString())
console.log(present.toLocaleTimeString())
console.log(present.toString())

const past = new Date('apr 1 2023 7:30:50')
const present = new Date()

console.log(present.getTime(), past.getTime())

const diference = present.getTime() - past.getTime()

console.log(diference)

const seconds = Math.round(diference / 1000)

console.log(seconds)

const minutes = Math.round(seconds / 60)

console.log(minutes)

const hours = Math.round(minutes/ 60)

console.log(hours)

const days = Math.round(hours / 24)

console.log(days)

console.log(`Escrito há ${days} dias`)






const link = document.querySelector('a')
// console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://www.jw.org')
link.innerText = 'Site JW.ORG'
const paragraph = document.querySelector('p')
console.log(paragraph.getAttribute('class'))
paragraph.setAttribute('style','color:red')
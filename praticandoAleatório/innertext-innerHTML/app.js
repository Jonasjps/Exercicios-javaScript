const paragraph = document.querySelector('p')

// paragraph.innerText = ' Novo texto criado'

// const paragraphs = document.querySelectorAll('p')
// paragraphs.forEach((paragraph, index) => {
// paragraph.innerText += ` Novo texto ${index + 1}`
// })

const div = document.querySelector('.content') 

// div.innerHTML += '<h2>Novo Title</h2>'

const people = ['Jonas','Luiz', 'Valdo','Michele']

people.forEach(person => {
  div.innerHTML +=  `<p>${person}</p>`
})

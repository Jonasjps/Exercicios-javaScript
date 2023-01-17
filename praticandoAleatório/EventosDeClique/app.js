const ul = document.querySelector('ul')

const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = 'Novo item'
    ul.prepend(li)
})

ul.addEventListener('click', event => {
    clickedElement = event.target

    if(clickedElement.tagName === 'LI') {
        clickedElement.remove()
    }
})














// button.addEventListener('click', () => {
//     const li = document.createElement('li')
//     li.textContent = 'Novo item'
//     ul.prepend(li)//ou o método APPEND()
// })
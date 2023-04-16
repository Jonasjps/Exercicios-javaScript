const todasLis = document.querySelector('.todos-container')
const formInput = document.querySelector('.form-add-todo')

formInput.addEventListener('submit', event => {
    event.preventDefault()
    const valueDoInput = event.target.add.value.trim()
    
    
    console.log(valueDoInput.children)


})
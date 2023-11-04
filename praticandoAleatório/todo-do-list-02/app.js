const formInput = document.querySelector('.form-add-todo')

formInput.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event.target.add.value)
})
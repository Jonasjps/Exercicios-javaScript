const inputForm = document.querySelector('.form-add-todo')

inputForm.addEventListener('submit', event => {
    event.preventDefault()

    console.log(event.target.add.value)
})
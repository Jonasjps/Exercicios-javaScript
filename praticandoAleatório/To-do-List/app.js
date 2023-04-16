const formTodoList = document.querySelector('.form-add-todo')

formTodoList.addEventListener('submit', event => {
    event.preventDefault()
    const valueDoInput = event.target.add.value.trim()
    console.log(valueDoInput)
})
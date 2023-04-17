const formAddTodo = document.querySelector('.form-add-todo')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event.target.add.value)
} )

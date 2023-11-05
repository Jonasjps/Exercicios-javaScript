const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')


formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value 

    console.log(todos)

     event.target.reset()
} )
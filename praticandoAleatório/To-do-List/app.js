const formTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

formTodo.addEventListener('submit', event => {
    event.preventDefault()
    const valueDoInput = event.target.add.value.trim()
    todosContainer.innerHTML += ` 
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${valueDoInput}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`
})
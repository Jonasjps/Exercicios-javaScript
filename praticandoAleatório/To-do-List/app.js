const formTodoList = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')


formTodoList.addEventListener('submit', event => {
    event.preventDefault()
    const valueDoInput = event.target.add.value.trim()
    
    if(valueDoInput.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${valueDoInput}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`

    }
    formTodoList.reset()
})

todosContainer.addEventListener('click', event => {
    const valueDoInput = event.target
    
    
   if(Array.from(valueDoInput.classList).includes('delete')) {
        valueDoInput.parentElement.remove()
   }
})
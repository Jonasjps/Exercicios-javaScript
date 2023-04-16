const formTodoList = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search input')

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

formSearch.addEventListener('input', event => {
    const todoList = event.target.value.toLowerCase()
     Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(todoList))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hedden')
        })

        Array.from(todosContainer.children)
        .filter(todo => todo.textContent.toLocaleLowerCase().includes(todoList))
        .forEach(todo => {
            todo.classList.remove('hedden')
            todo.classList.add('d-flex')
        })

        
        
    })

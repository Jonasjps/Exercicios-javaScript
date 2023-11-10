const formInput = document.querySelector('.form-add-todo')
const formSearch = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

const addTodo = inputValue => {
    if(inputValue.length) {
        todosContainer.innerHTML += 
            `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
                <span>${inputValue}</span>
                <i class="far fa-trash-alt delete" data-trash="${inputValue}" ></i>
            </li>
            `
    
    }

}

formInput.addEventListener('submit', event => {
    event.preventDefault() 
    const inputValue = event.target.add.value
    addTodo(inputValue)
    event.target.reset()
})

const removeTodo = clickedElement => {
    if(clickedElement.dataset.trash) {
        document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`).remove()
    }
}

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    removeTodo(clickedElement)
})

const hideTodos = (todos, inputValue) => {
    todos
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })
}

const showTodos = (todos, inputValue) => {
    todos
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('hidden')
        todo.classList.add('d-flex')
    })

}


formSearch.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase().trim()
    const todos = Array.from(todosContainer.children)
    hideTodos(todos, inputValue)
    showTodos(todos, inputValue)
})




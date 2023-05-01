
const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search')

const addTodo = valueInput => {
    if (valueInput.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${valueInput}">
                <span>${valueInput}</span>
                <i class="far fa-trash-alt " data-trash="${valueInput}"></i>
            </li>`
            
        event.target.reset()
    }
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const valueInput =  event.target.add.value.trim()
    addTodo(valueInput)
})

const removeTodo = clickedElement => {
    const todoElement = clickedElement.dataset.trash 
    const referenciaDaLi = document.querySelector(`[data-todo="${todoElement}"]`)

    if (todoElement) {
        referenciaDaLi.remove()
    }
}

todosContainer.addEventListener('click', event => {
    const clickedElement =  event.target
    removeTodo(clickedElement)
})

const fintrandoTodos = (todos, filtrando, returnMethedValue) => todos
    .filter(todo => {
        const methedTodos = todo.textContent.toLowerCase().includes(filtrando)
        return returnMethedValue ? methedTodos : !methedTodos
    })


const hiDeTodos = (todos, filtrando) => {
    fintrandoTodos(todos, filtrando, false)
    .forEach(todo => {
        todo.classList.add('hedden')
        todo.classList.remove('d-flex')
    })
}

const showTodos = (todos, filtrando) => {
   fintrandoTodos(todos, filtrando, true)
    .forEach(todo => {
        todo.classList.add('d-flex')
        todo.classList.remove('hedden')
    })
}

formSearch.addEventListener('input', event => {
    const filtrando = event.target.value.toLowerCase()
    const todos = Array.from(todosContainer.children) 

    hiDeTodos(todos, filtrando)
    showTodos(todos, filtrando)
})
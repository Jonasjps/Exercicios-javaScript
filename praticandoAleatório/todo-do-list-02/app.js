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

const removeTodo = clickedElement => {
    const elementTodo = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`) 

    if(elementTodo) {
        todo.remove()
    }
}

const filteringTodo = (todos, inputValue, returnMatchValue) => {
    return todos
    .filter(todo => {
            const checkingTodos = todo.textContent.toLowerCase().includes(inputValue)
            return returnMatchValue ? checkingTodos : !checkingTodos
        })
    }
    
    const manipulateClass = (todos, removeClass, addClass) => {
        todos.forEach(todo => {
            todo.classList.remove(removeClass)
            todo.classList.add(addClass)
        })
    } 
    
    const hideTodos = (todos, inputValue) => {
        filteringTodo(todos, inputValue, false)
        manipulateClass(todos, 'd-flex', 'hidden')
    }

    const showTodos = (todos, inputValue) => {
        const todosFiltering = filteringTodo(todos, inputValue, true)
        manipulateClass(todosFiltering, 'hidden', 'd-flex')
    }

    
    
    formInput.addEventListener('submit', event => {
    event.preventDefault() 
    const inputValue = event.target.add.value
    addTodo(inputValue)
    event.target.reset()
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    removeTodo(clickedElement)
})

formSearch.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase().trim()
    const todos = Array.from(todosContainer.children)
    hideTodos(todos, inputValue)
    showTodos(todos, inputValue)
})

const formAddTodo = document.querySelector('.form-add-todo')
const formSearch = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

const addTodo = (inputValue) => {

    if(inputValue.length) {
        todosContainer.innerHTML += 
        `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
                <span>${inputValue}</span>
                <i class="far fa-trash-alt " data-trash="${inputValue}"></i>
            </li>
        `
    }
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()
    addTodo(inputValue)    

    event.target.reset()
} )

const removeInTodo = (clickedElement) => {

    const clickedInTodo = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`) 
    
    if(clickedInTodo){
        todo.remove()
    }
}

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    removeInTodo(clickedElement)
})

const filteringLis = (todos, inputSearch, returnMetchTodo) => {
    return todos
        .filter(todo => {
            const matchInLis = todo.textContent.toLowerCase().includes(inputSearch) 
            return returnMetchTodo ? matchInLis : !matchInLis
        }) 
} 

const hideTodos = (todos, inputSearch) => {
   filteringLis(todos, inputSearch, false)
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })
}

const showTodos = (todos, inputSearch) => {
   filteringLis(todos, inputSearch, true)
    .forEach(todo => {
        todo.classList.remove('hidden')
        todo.classList.add('d-flex')
    })
}

formSearch.addEventListener('input', event => {
    const inputSearch = event.target.value.trim().toLowerCase()
    const todos = Array.from(todosContainer.children)
        hideTodos(todos, inputSearch)
        showTodos(todos, inputSearch)
})


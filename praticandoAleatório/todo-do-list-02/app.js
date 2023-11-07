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

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    if(clickedElement.dataset.trash){
        document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`).remove()
    }

})

formSearch.addEventListener('input', event => {
    const inputSearch = event.target.value.trim().toLowerCase()
    Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputSearch)) 
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })

        Array.from(todosContainer.children)
        .filter(todo => todo.textContent.toLowerCase().includes(inputSearch)) 
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })

})


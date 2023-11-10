const formInput = document.querySelector('.form-add-todo')
const formSearch = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

const addTodo = inputValue => {
    if(inputValue.length) {
        todosContainer.innerHTML += 
            `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${inputValue}</span>
                <i class="far fa-trash-alt delete" ></i>
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

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    if((Array.from(clickedElement.classList)).includes('delete')) {
        clickedElement.parentElement.remove()
    }
})

formSearch.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase().trim()
    Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })

        Array.from(todosContainer.children)
        .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })
})




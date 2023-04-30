const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search')

const addTodo = valueInput => {
    if (valueInput.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${valueInput}">
                <span>${valueInput}</span>
                <i class="far fa-trash-alt delete" data-trash="${valueInput}"></i>
            </li>`
    
        event.target.reset()
    }

}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const valueInput =  event.target.add.value.trim()
    addTodo(valueInput)
})
const removeTodo = (clickedElement) => {
    const dataTrashValue = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo="${dataTrashValue}"]`)

     if(dataTrashValue) {
         todo.remove()
    }
}

todosContainer.addEventListener('click', event => {
    const clickedElement =  event.target
    removeTodo(clickedElement)

})

formSearch.addEventListener('input', event => {
    const filtrando = event.target.value.toLowerCase()
    Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(filtrando))
    .forEach(todo => {
        todo.classList.add('hedden')
        todo.classList.remove('d-flex')
    })
    Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(filtrando))
    .forEach(todo => {
        todo.classList.add('d-flex')
        todo.classList.remove('hedden')
    })
})
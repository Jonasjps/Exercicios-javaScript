
const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const valueInput =  event.target.add.value.trim()
    if (valueInput.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${valueInput}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`

    }
    event.target.reset()
})

todosContainer.addEventListener('click', event => {
    const clickedElement =  event.target

    if(Array.from(clickedElement.classList).includes('delete')) {
        clickedElement.parentElement.remove()
    }
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
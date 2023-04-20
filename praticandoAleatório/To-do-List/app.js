const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search input')


formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const valuetodo = event.target.add.value.trim()
    
    if(valuetodo.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${valuetodo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`    

    }
    formAddTodo.reset()
} )


todosContainer.addEventListener('click', event => {
    const clicked = event.target
    if(Array.from(clicked.classList).includes('delete')) {
       return clicked.parentElement.remove()
    } 
})

formSearch.addEventListener('input', event => {
    const buscaDoInput = event.target.value.trim()
    console.log(Array.from(todosContainer.children).includes(buscaDoInput))

})
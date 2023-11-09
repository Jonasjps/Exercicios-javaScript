const formInput = document.querySelector('.form-add-todo')
const formSearch = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

formInput.addEventListener('submit', event => {
    event.preventDefault() 
    const inputValue = event.target.add.value

    if(inputValue.length) {
        todosContainer.innerHTML += 
            `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${inputValue}</span>
                <i class="far fa-trash-alt delete" ></i>
            </li>
            `

    }
    event.target.reset()
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    if((Array.from(clickedElement.classList)).includes('delete')) {
        clickedElement.parentElement.remove()
    }
})

formSearch.addEventListener('input', event => {
    const inputValue = event.target.value.trim()

    console.log(inputValue)
})




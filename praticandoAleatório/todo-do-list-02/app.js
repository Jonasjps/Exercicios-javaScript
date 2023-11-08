const formInput = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

formInput.addEventListener('submit', event => {
    event.preventDefault() 
    const inputValue = event.target.add.value

    todosContainer.innerHTML += 
    `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete" ></i>
        </li>
    `
    event.target.reset()
})






const formInput = document.querySelector('[class="form-control]')

formInput.addEventListener('submit', event => {
    event.preventDefault()

    console.log(event.target.city.value)
})
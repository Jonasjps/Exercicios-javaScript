const form = document.querySelector('[data-js="change-location"]')

form.addEventListener('click', event => {
    event.preventDefault()
    console.log(event.target.name.value)
})
const cityForm = document.querySelector('[data-js="change-location"]')

cityForm.addEventListener('submit', event => {
    event.preventDefault()

    console.log('form enviado =)')
})
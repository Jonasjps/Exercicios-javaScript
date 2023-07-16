//  Encadeamento de Promises
fetch('https://jsonPlaceholder.typicode.com/users')
    .then(response => {
        console.log('response',response)
        return response.json()
    })
    .then(user => console.log(user))
    .catch(erro => console.log(erro))
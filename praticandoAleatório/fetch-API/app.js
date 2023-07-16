const getUsers = async () => {
    const response = await fetch('https://jsonPlaceholder.typicode.com/users')
    const users = await response.json()
    return users
}

console.log(getUsers())

// fetch('https://jsonPlaceholder.typicode.com/users')
//     .then(response => {
//         console.log('response',response)
//         return response.json()
//     })
//     .then(user => console.log(user))
//     .catch(erro => console.log(erro))
const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return  await response.json()
}

console.log(getUsers())
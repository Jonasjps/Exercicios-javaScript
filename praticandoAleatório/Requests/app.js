const getTodos = url => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', () => {
        const isRequestOk = request.readyState === 4 && request.status === 200
        const isRequetNotOK = request.readyState === 4
        
        if (isRequestOk) {
            const data = JSON.parse(request.responseText)
            resolve(data)
        }
    
        if(isRequetNotOK) {
            reject('Não foi possivel obter dados da API')
        }
    })
    
    
    request.open('GET', url)
    request.send()
})

getTodos('https://pokeapi.co/api/v2/pokemon/25')
    .then(pokemon => console.log(pokemon))
    .catch(error => console.log(error))


// getTodos('./json/todos.JSON', (erro, data) => {
//     console.log(data)
//     getTodos('./json/todos-02.JSON', (erro, data) => {
//         console.log(data)
//         getTodos('./json/todos-03.JSON', (erro, data) => {
//             console.log(data)
//         })
//     })
    
// })
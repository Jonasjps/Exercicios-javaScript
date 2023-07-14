const getPokemon = url => new Promise((resolve, reject) => {
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

getPokemon('https://pokeapi.co/api/v2/pokemon/1')
    .then(bulbasaur => {
        console.log(bulbasaur)
        return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
    })
    .then(charmender => {
        console.log(charmender)
        return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
    })
    .then(console.log)
    .catch(error => console.log(error))


// getPokemon('./json/todos.JSON', (erro, data) => {
//     console.log(data)
//     getPokemon('./json/todos-02.JSON', (erro, data) => {
//         console.log(data)
//         getPokemon('./json/todos-03.JSON', (erro, data) => {
//             console.log(data)
//         })
//     })
    
// })
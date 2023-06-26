const getTodos = callback => {
    const request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', () => {
        const isRequestOk = request.readyState === 4 && request.status === 200
        const isRequetNotOK = request.readyState === 4
        
        if (isRequestOk) {
            callback(null, request.responseText)
            return 
        }
    
        if(isRequetNotOK) {
            callback('Não foi possivel obter dados da API', null)
        }
    })
    
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todosl' )
    request.send()

}

getTodos((erro, data) => {
    console.log('callback executada')

    if(erro) {
        console.log(erro)
        return
    }

    console.log(data)
})
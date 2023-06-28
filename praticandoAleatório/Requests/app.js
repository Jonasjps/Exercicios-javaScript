const getTodos = callback => {
    const request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', () => {
        const isRequestOk = request.readyState === 4 && request.status === 200
        const isRequetNotOK = request.readyState === 4
        
        if (isRequestOk) {
            const data = JSON.parse(request.responseText)
            callback(null, data)
            return 
        }
    
        if(isRequetNotOK) {
            callback('Não foi possivel obter dados da API', null)
        }
    })
    
    
    request.open('GET', './todos.JSON')
    request.send()

}

getTodos((erro, data) => {
    console.log('callback executada')
    console.log(erro, data)
    
})
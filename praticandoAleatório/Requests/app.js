const getTodos = () => {
    const request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', () => {
        const isRequestOk = request.readyState === 4 && request.status === 200
        const isRequetNotOK = request.readyState === 4
        
        if (isRequestOk) {
            console.log(request, request.responseText)
            return
        }
    
        if(isRequetNotOK) {
            console.log('Não foi possivel obter dados da Api')
        }
    })
    
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos' )
    request.send()

}

getTodos()
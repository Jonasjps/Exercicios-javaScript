const getTodos = (url, callback) => {
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
    
    
    request.open('GET', url)
    request.send()

}

getTodos('./json/todos.JSON', (erro, data) => {
    console.log(data)
    getTodos('./json/todos-02.JSON', (erro, data) => {
        console.log(data)
        getTodos('./json/todos-03.JSON', (erro, data) => {
            console.log(data)
        })
    })
    
})
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4) {
        console.log(request.response)
    }
    // console.log(request, request.readyState)
})


request.open('GET', 'https://jsonplaceholder.typicode.com/todos' )
request.send()
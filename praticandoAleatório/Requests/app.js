const request = new XMLHttpRequest()

request.open('GET', 'https://jsonplaceholder.typicode.com/todos' )
request.send()
console.log(request)
const getData = () => {
    return new Promise((resolve, reject) => {
        resolve('Dados aqui')
        // reject('Error aqui')
    })
}

getData()
    .then(value => console.log(value))
    .catch(error => console.log(error))
// Destructuring Assingment [Arrays]
const numbers = [1, 2, 3, 4, 5]
const [ prim, senc, terc, quar, quin ] = numbers

console.log(terc) //correnponde ao mumero 3
console.log(prim) //correnponde ao numero 1

//Destructuring Assigment {Objetos}


const obj = { a: 1, b: 2}
const {a, b} = obj

console.log(a,b) // tem como resultado os valores de 1 e 2
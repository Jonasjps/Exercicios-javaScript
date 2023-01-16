const article = document.querySelector('article')

// Array.from(article.children).forEach(Element => {
//     Element.classList.add('article-element')
// })

const title = document.querySelector('h2')
// console.log(title.parentElement)//Propriedade para saber o pai desse elemento.

console.log(title.nextElementSibling)//Propriedade para saber o irmãon desse elemento.
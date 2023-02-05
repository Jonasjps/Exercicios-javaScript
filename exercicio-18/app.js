/* Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/
const inputUsername = document.querySelector('#username')
const form = document.querySelector('form')
const button = document.querySelector('button')

const feedback = document.createElement('p')
const paragraph = document.createElement('p')

paragraph.setAttribute('data-feedback','submit-feedback')

const paragraphSubmitExist = paragraphifo => {
  const {feedback, text,className,parentSibling} = paragraphifo
  feedback.textContent = text
  feedback.setAttribute('class',className)
  parentSibling.insertAdjacentElement('afterend',feedback)
  return
}

const feedbackInputExist = feedbackifo => {
  const {paragraph,text,className,parentSibling} = feedbackifo
  paragraph.textContent = text
  paragraph.setAttribute('class', className)
  parentSibling.insertAdjacentElement('afterend',paragraph)
  return
}
const paragraphfalse = {
  feedback:paragraph,
  text:'Por favor, insira um username válido!',
  className:'submit-help-feedback',
  parentSibling: button
}

const paragraphTrue = {
  feedback:paragraph,
  text:'Dados enviados =)',
  className:'submit-success-feedback',
  parentSibling: button 
}

const feedbackfalse = {
  paragraph:feedback,
  text:'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas',
  className:'username-help-feedback',
  parentSibling:inputUsername
}

const feedbackTrue = {
  paragraph: feedback,
  text: 'Username válido =)',
  className: 'username-success-feedback',
  parentSibling: inputUsername
}

const paragraphDoInputExist = () => {
  const paragraphExist = document.querySelector('[data-feedback="submit-feedback"]')

  if(paragraphExist) {
    paragraph.remove()
  }  
} 

const testRegex = username => /^[a-zA-Z]{6,}$/.test(username)

const funcInputUsername =  event => {
  const valueUsername = event.target.value
  const testUsername = testRegex(valueUsername)
  
  paragraphDoInputExist()
 
  if(!testUsername) {
    feedbackInputExist(feedbackfalse)
    return
  }
  feedbackInputExist(feedbackTrue)
}

const funcFormSubmit =  event => {
  event.preventDefault()
  const usernameInputValue = inputUsername.value
  const testUsername = testRegex(usernameInputValue)
  
  if(!testUsername) {
    paragraphSubmitExist(paragraphfalse)
    return
  }
  paragraphSubmitExist(paragraphTrue)
}

inputUsername.addEventListener('input',funcInputUsername)
form.addEventListener('submit',funcFormSubmit)
/*
02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/
const some = (array, callback) => {
  for(let a = 0; a < array.length; a++) {
   const funcCondição = callback(array[a]) 
    if(funcCondição) {
      return true
    }
  }
  return false
}
console.log(some([1,2,3], item => item > 2))
console.log(some([1,3,5], item => item === 0))



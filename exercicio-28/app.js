/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/

/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/
personalInformation.addAge = (age = 1 ) => {
  personalInformation.Idade += age
  return personalInformation.Idade
}

personalInformation.addAge(5)
// console.log(personalInformation)
// console.log(personalInformation.addAge())
/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/
personalInformation.addMetros = (metros = 0) => {
  personalInformation.MetrosCaminhado += metros
  
  if(personalInformation.MetrosCaminhado > 0) {
     personalInformation.VoceEstaAndando = true
  }
  
  return personalInformation.MetrosCaminhado
}

// personalInformation.addMetros(0)
// personalInformation.addMetros(5)
// personalInformation.addMetros(2)
personalInformation.addMetros(1)
/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/
const validpluralOrSingular = (quantity, plural, singular) => quantity === 1 ? plural : singular
personalInformation.addMessage = () => {
   const message =  `Oi. Eu sou o ${personalInformation.Nome} ${personalInformation.Sobrenome}, tenho ${personalInformation.Idade} ${validpluralOrSingular(personalInformation.Idade, 'ano','anos')}, ${personalInformation.Altura} metros de altura, 
      peso ${personalInformation.Peso} quilos e, só hoje, eu já caminhei ${personalInformation.MetrosCaminhado} 
      ${validpluralOrSingular(personalInformation.MetrosCaminhado, 'metro', 'metros')}.`
  return message
}
  console.log(personalInformation.addMessage())

/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

const isFalse = value => Boolean(value)

const valuesFalsys = [false, null, undefined, 0, NaN, '']
const valuesTruthys = [true, {}, [], 42, "foo", new Date(), -42]

valuesFalsys.forEach(valueFalse => {
  console.log(isFalse(valueFalse))
})


const isTruthy = value => Boolean(value)

valuesTruthys.forEach(valuetruthy => {
  console.log(isTruthy(valuetruthy))
})


/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/
const SaudeIlustrado = {
  jonas: {paginas: 851, autor: 'Jonas', editora: 'Jeová'},
  mateus: {paginas: 851, autor: 'Jonas', editora: 'Jeová'},
  proverbios: {paginas: 851, autor: 'Jonas', editora: 'Jeová'}
}

const books = SaudeIlustrado => {
   SaudeIlustrado = {
    jonas: {paginas: 851, autor: 'Jonas', editora: 'Jeová'},
    mateus: {paginas: 851, autor: 'Jonas', editora: 'Jeová'},
    proverbios: {paginas: 851, autor: 'Jonas', editora: 'Jeová'}
  }
  return SaudeIlustrado
}

console.log(books(SaudeIlustrado.jonas.autor))
// console.log(SaudeIlustrado)

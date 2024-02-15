const currencyOneEl = document.querySelector('[data-js="currency-one"]')
 const currencyTwoEl = document.querySelector('[data-js="currency-two"]')
 const  currencyContainerEl = document.querySelector('[data-js="currency-container"]')
 const convertedValueEl = document.querySelector('[data-js="converted-value"]')
 const valuePrecisionEl = document.querySelector('[data-js="conversion-precision"]')
 const timesCurrencyOneEl = document.querySelector('[data-js="currency-one-times"]')

 
 const state = (() => {
   let exchangeRate = {}

  return {
    getExchangeRate: () => exchangeRate,
    setExchangeRate: newExchangeRate => {
      if(!newExchangeRate.conversion_rates) {
        return console.log('O objeto precisa conter uma propriedade conversion_rates.')
      }
      return exchangeRate = newExchangeRate
    }
  }
 })()



 const getUrl = currency => `https://v6.exchangerate-api.com/v6/c26590d4fd7236521a51fca0/latest/${currency}`
  
const messageError = errorType => ({
  'unsupported-code': 'A moeda não existe em nosso banco de dados.',
  'malformed-request': 'O endpoint do seu resquest precisa seguir a estrutura a seguir: https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD ',
  'invalid-key': 'A chave da api não é válida.',
  'inaction-account': 'O seu endereço de email não foi confirmado',
  'quota-reached': 'Sua conta alcançou o limite de requests permitidos em seu plano atual.' 
})[errorType] || 'Não foi obter dados da moeda informada.'

const showAlert = err => {
  
  const div = document.createElement('div')
  const button = document.createElement('button')

  div.textContent = err.message
  div.classList.add('width','alert', 'alert-warning', 'alert-dismissible', 'fade', 'show')
  div.style.width = '500px'
  div.style.margin = 'auto'
  div.setAttribute('role', 'alert')
  button.classList.add('btn-close')
  button.setAttribute('type', 'button')
  button.setAttribute('aria-label', 'close')
  
  
  button.addEventListener('click', () => {
    div.remove()
  })
  
  div.appendChild(button)

  currencyContainerEl.insertAdjacentElement('afterend', div)
}

const fetchExchangeRates = async (url) => { 
  try{ 
    const response = await fetch(url)

    if(!response.ok) {
      throw new Error('Sua conexão falhou. Não foi possível obter as informações.')
    }

    const conversionRates = await response.json()

    if (conversionRates.result === 'error') {
      throw new Error(messageError(conversionRates['error-type']))
    }

    return conversionRates
  }catch (err) {
    showAlert(err)
  }
  
}

const showInitialInfo = () => {
  const getOptions = currencySelect => Object.keys(internalExchangeRates.conversion_rates)
  .map(currency => `<option ${currency === currencySelect ? 'selected' : ''}>${currency}</option>`) 
  .join('')

  currencyOneEl.innerHTML = getOptions('USD')
  currencyTwoEl.innerHTML = getOptions('BRL')

  convertedValueEl.textContent = internalExchangeRates.conversion_rates.BRL.toFixed(2)
  valuePrecisionEl.textContent = `1 USD = ${internalExchangeRates.conversion_rates.BRL} BRL`

}

const init = async () => {

  internalExchangeRates = {...(await fetchExchangeRates(getUrl('USD')))}
  
  if(internalExchangeRates.conversion_rates) {
    showInitialInfo()
  }
}

const showUpdatedRates = () => {
  convertedValueEl.textContent = (timesCurrencyOneEl.value * internalExchangeRates.conversion_rates[currencyTwoEl.value]).toFixed(2)
  valuePrecisionEl.textContent = `1 ${currencyOneEl.value} = ${1 * internalExchangeRates.conversion_rates[currencyTwoEl.value]} ${currencyTwoEl.value}`
}

timesCurrencyOneEl.addEventListener('input', e => {
  convertedValueEl.textContent = (e.target.value * internalExchangeRates.conversion_rates[currencyTwoEl.value]).toFixed(2)
})

currencyTwoEl.addEventListener('input', e => {

  showUpdatedRates()
})

currencyOneEl.addEventListener('input', async e => {
  internalExchangeRates = {...(await fetchExchangeRates(getUrl(e.target.value)))}

  showUpdatedRates()
})
init()
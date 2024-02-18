const currencyOneEl = document.querySelector('[data-js="currency-one"]')
 const currencyTwoEl = document.querySelector('[data-js="currency-two"]')
 const  currencyContainerEl = document.querySelector('[data-js="currency-container"]')
 const convertedValueEl = document.querySelector('[data-js="converted-value"]')
 const valuePrecisionEl = document.querySelector('[data-js="conversion-precision"]')
 const timesCurrencyOneEl = document.querySelector('[data-js="currency-one-times"]')

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
 
 const state = (() => {
   let exchangeRate = {}

  return {
    getExchangeRate: () => exchangeRate,
    setExchangeRate: newExchangeRate => {
      
      if(!newExchangeRate.conversion_rates) {
        return showAlert({
          message: 'O objeto precisa conter uma propriedade conversion_rates.'
        })
      }
      return exchangeRate = newExchangeRate
    }
  }
 })()


 const APIKey = 'c26590d4fd7236521a51fca0'

 const getUrl = currency => `https://v6.exchangerate-api.com/v6/${APIKey}/latest/${currency}`
  
const messageError = errorType => ({
  'unsupported-code': 'A moeda não existe em nosso banco de dados.',
  'malformed-request': 'O endpoint do seu resquest precisa seguir a estrutura a seguir: https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD ',
  'invalid-key': 'A chave da api não é válida.',
  'inaction-account': 'O seu endereço de email não foi confirmado',
  'quota-reached': 'Sua conta alcançou o limite de requests permitidos em seu plano atual.' 
})[errorType] || 'Não foi obter dados da moeda informada.'

const fetchExchangeRates = async (url) => { 
  try{ 
    const response = await fetch(url)

    if(!response.ok) {
      throw new Error('Sua conexão falhou. Não foi possível obter as informações.')
    }

    const conversionRates = await response.json()

    if (conversionRates.result === 'error') {
      const getMessageError = messageError(conversionRates['error-type'])
      throw new Error(messageError(getMessageError))
    }

    return conversionRates
  }catch (err) {
    showAlert(err)
  }
  
}

const getOptions = (currencySelect, conversion_rates ) => {
  const setSelectAttribute = currency => currency === currencySelect ? 'selected' : ''
  return Object.keys(conversion_rates)
  .map(currency => `<option ${setSelectAttribute(currency)}>${currency}</option>`) 
  .join('')
}

const getMultipliedExchangeRaate = ( conversion_rates ) => {
  const currencyTwo = conversion_rates[currencyTwoEl.value]
  return (timesCurrencyOneEl.value * currencyTwo).toFixed(2)
}

const getNotRoundExchangeRate = conversion_rates  => {
  const currencyTwo = conversion_rates[currencyTwoEl.value] 
  return  `1 ${currencyOneEl.value} = ${1 * currencyTwo} ${currencyTwoEl.value}`
}

const showUpdatedRates = ({ conversion_rates }) => {
  convertedValueEl.textContent = getMultipliedExchangeRaate( conversion_rates )
  valuePrecisionEl.textContent = getNotRoundExchangeRate( conversion_rates )
}

const showInitialInfo = ({ conversion_rates }) => {
  currencyOneEl.innerHTML = getOptions('USD', conversion_rates )
  currencyTwoEl.innerHTML = getOptions('BRL', conversion_rates )
  convertedValueEl.textContent = getMultipliedExchangeRaate( conversion_rates )
  valuePrecisionEl.textContent = getNotRoundExchangeRate( conversion_rates )

}

const init = async () => {
  const url = getUrl('USD')
  const newExchangeRate = await fetchExchangeRates(url)
  const exchangeRate = state.setExchangeRate(newExchangeRate)

  if(exchangeRate && exchangeRate.conversion_rates) {
    showInitialInfo(exchangeRate)
  }
}

timesCurrencyOneEl.addEventListener('input', () => {
  const { conversion_rates } = state.getExchangeRate()
  convertedValueEl.textContent = getMultipliedExchangeRaate(conversion_rates)
})

currencyTwoEl.addEventListener('input', () => {
  const exchangeRate = state.getExchangeRate()
  showUpdatedRates(exchangeRate)
})

currencyOneEl.addEventListener('input', async e => {
  const url = getUrl(e.target.value)
  const newExchangeRate = await fetchExchangeRates(url)
  const exchangeRate = state.setExchangeRate(newExchangeRate)
  showUpdatedRates(exchangeRate)
})

init()
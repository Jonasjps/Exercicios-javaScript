const currencyOneEl = document.querySelector('[data-js="currency-one"]')
const currencyTwoEl = document.querySelector('[data-js="currency-two"]')
const convertedValueEl = document.querySelector('[data-js="converted-value"]')
const conversionPrecisionEl = document
    .querySelector('[data-js="conversion-precision"]')
const timesCurrencyOneEl = document
    .querySelector('[data-js="currency-one-times"]')
const currencyContainer = document
    .querySelector('[data-js="currency-container"]')

const showAlert = err => {
    const div = document.createElement('div')
        const button = document.createElement('button')

        div.textContent = err.message
        div.classList.add('alert', 'alert-warning', 'alert-dismissible',  'fade', 'show')
        div.setAttribute('role', 'alert')
        button.classList.add('btn-close')
        button.setAttribute('aria-label', 'close')
        div.appendChild(button)
        div.style.textAlign = 'center'
        div.style.margin = 'auto'
        div.style.width = '500px'
        currencyContainer.insertAdjacentElement('afterend', div)

        const removeAlert =  () => div.remove()
        
        button.addEventListener('click', removeAlert)

}

const state = (() => {
    let exchangeRate = {}

    return {
        getExchangeRate: () => exchangeRate,
        setExchangeRate: newExchangeRate => {
            if(!newExchangeRate.conversion_rates) {
                return showAlert({
                    message:'O objeto Precisa ter uma propriedade conversion_rates'
                })
            }
            return exchangeRate = newExchangeRate
        }
    }
})()


const getUrl = currency => 
    `https://v6.exchangerate-api.com/v6/c26590d4fd7236521a51fca0/latest/${currency}`

const messageError = errorType => ({
    'unsupported-code': 'A moeda não existe em nosso banco de dados.',
    'malformed-request': 'O endpoint do seu resquest precisa seguir a estrutura a seguir: https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD ',
    'invalid-key': 'A chave da api não é válida.',
    'inaction-account': 'O seu endereço de email não foi confirmado',
    'quota-reached': 'Sua conta alcançou o limite de requests permitidos em seu plano atual.' 
})[errorType] || 'Não foi possível obter dados das moeda informada.'

const fetchExchangeRates = async url => {
    try{
        const response = await fetch(url) 

        if(!response.ok) {
            throw new Error('Sua conexão falhou. Não foi possível obter informações.')
        }
        
        const exchangeRateData = await response.json()

        if(exchangeRateData.result === 'error') {
            const messageTypeError = messageError(exchangeRateData['error-type'])
            throw new Error(messageTypeError)
        }

         return state.setExchangeRate(exchangeRateData)

    }catch (err) {
        showAlert(err)
    }
} 

const getMultipliedeExchangeRate = conversion_rates => {
    const currencyTwo = conversion_rates[currencyTwoEl.value]
    return (timesCurrencyOneEl.value * currencyTwo.toFixed(2))
}

const getNotRoundExchangeRate = conversion_rates => {
    const currencyTwo = conversion_rates[currencyTwoEl.value]
    return `1 ${currencyOneEl.value} = ${1 * currencyTwo} ${currencyTwoEl.value}`
}

const showUpdatedRates = ({conversion_rates}) => {
    convertedValueEl.textContent = getMultipliedeExchangeRate(conversion_rates)
    conversionPrecisionEl.textContent = getNotRoundExchangeRate(conversion_rates) 
}

const getOptions = (currencySelect, conversion_rates) => {
    const setSelectedAttribute = currency =>
         currency === currencySelect ? 'selected' : '' 
    const getOptionsAsArray = currency => 
        `<option ${setSelectedAttribute(currency)}>${currency}</option>`

    return Object.keys(conversion_rates)
    .map(getOptionsAsArray)
    .join('')
}

const showIntialInfo = ({conversion_rates}) => {
    currencyOneEl.innerHTML = getOptions('USD', conversion_rates)
    currencyTwoEl.innerHTML = getOptions('BRL', conversion_rates)
    showUpdatedRates({conversion_rates})
}

const init = async () => {
    const url = getUrl('USD')
    const exchangeRate = await fetchExchangeRates(url)

    if(exchangeRate && exchangeRate.conversion_rates) {
        showIntialInfo(exchangeRate)
    }
}

const handleTimesCurrencyInput = () => {
    const {conversion_rates} = state.getExchangeRate()
    convertedValueEl.textContent = getMultipliedeExchangeRate(conversion_rates)
}

const handleCurrencyTwoInput =  () => {
    const {conversion_rates} = state.getExchangeRate()
    showUpdatedRates({conversion_rates})
}

const handleCurrencyOneInput =  async e => { 
    const url = getUrl(e.target.value)
    const {conversion_rates} = await fetchExchangeRates(url)
    showUpdatedRates({conversion_rates})
}

timesCurrencyOneEl.addEventListener('input', handleTimesCurrencyInput )
currencyTwoEl.addEventListener('input', handleCurrencyTwoInput)
currencyOneEl.addEventListener('input', handleCurrencyOneInput)

init()



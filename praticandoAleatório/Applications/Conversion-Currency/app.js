const currencyOneEl = document.querySelector('[data-js="currency-one"]')
const currencyTwoEl = document.querySelector('[data-js="currency-two"]')
const convertedValueEl = document.querySelector('[data-js="converted-value"]')
const conversionPrecisionEl = document.querySelector('[data-js="conversion-precision"]')
const timesCurrencyOneEl = document.querySelector('[data-js="currency-one-times"]')
const currencyContainer = document.querySelector('[data-js="currency-container"]')

let internalExchangeRates = {}

// const state = (() => {
//     let exchangeRate = {}

//     return {
//         getExchangeRate: () => exchangeRate,
//         setExchangeRate: newExchangeRate => {
//             if(!newExchangeRate.conversion_rates) {
//                 return console.log('O objeto Precisa ter uma propriedade conversion_rates')
//             }
//             return exchangeRate = newExchangeRate
//         }
//     }
// })()


const getUrl = currency => `https://v6.exchangerate-api.com/v6/c26590d4fd7236521a51fca0/latest/${currency}`

const messageError = errorType => ({
    'unsupported-code': 'A moeda não existe em nosso banco de dados.',
    'malformed-request': 'O endpoint do seu resquest precisa seguir a estrutura a seguir: https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD ',
    'invalid-key': 'A chave da api não é válida.',
    'inaction-account': 'O seu endereço de email não foi confirmado',
    'quota-reached': 'Sua conta alcançou o limite de requests permitidos em seu plano atual.' 
})[errorType] || 'Não foi possível obter dados das moeda informada.'

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

        button.addEventListener('click', () => {
            div.remove()
        })

}

const fetchExchangeRates = async url => {
    try{
        const response = await fetch(url) 

        if(!response.ok) {
            throw new Error('Sua conexão falhou. Não foi possível obter informações.')
        }
        
        const exchangeRateData = await response.json()

        if(exchangeRateData.result === 'error') {
            throw new Error(messageError(exchangeRateData['error-type' ]))
        }

         return exchangeRateData

    }catch (err) {
        showAlert(err)
    }
} 

const showIntialInfo = () => {
    const getOptions = currencySelect => Object.keys(internalExchangeRates.conversion_rates)
        .map(currency => `<option ${currency === currencySelect ? 'selected' : ''}>${currency}</option>`)
        .join('')
        
        currencyOneEl.innerHTML = getOptions('USD')
        currencyTwoEl.innerHTML = getOptions('BRL')

        convertedValueEl.textContent = internalExchangeRates.conversion_rates.BRL.toFixed(2)
        conversionPrecisionEl.textContent = `1 USD = ${1 * internalExchangeRates.conversion_rates.BRL} BRL`

}

const init = async () => {
    internalExchangeRates = {...await fetchExchangeRates(getUrl('USD'))}

    if(internalExchangeRates.conversion_rates) {
        showIntialInfo()
    }
}

showUpdatedRates = () => {
    convertedValueEl.textContent = (timesCurrencyOneEl.value * internalExchangeRates.conversion_rates[currencyTwoEl.value]).toFixed(2)
    conversionPrecisionEl.textContent = `1 ${currencyOneEl.value} = ${1 * internalExchangeRates.conversion_rates[currencyTwoEl.value]} ${currencyTwoEl.value}`
}

timesCurrencyOneEl.addEventListener('input', e => {
    convertedValueEl.textContent = (e.target.value * internalExchangeRates.conversion_rates[currencyTwoEl.value].toFixed(2))
})

currencyTwoEl.addEventListener('input', showUpdatedRates)

currencyOneEl.addEventListener('input', async e => { 
    internalExchangeRates = {...await fetchExchangeRates(getUrl(e.target.value))}
    showUpdatedRates()
})

init()



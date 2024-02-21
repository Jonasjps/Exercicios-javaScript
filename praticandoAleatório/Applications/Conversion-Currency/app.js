const currencyOneEl = document.querySelector('[data-js="currency-one"]')
const currencyTwoEl = document.querySelector('[data-js="currency-two"]')
const convertedValueEl = document.querySelector('[data-js="converted-value"]')
const conversionPrecisionEl = document.querySelector('[data-js="conversion-precision"]')
const timesCurrencyOneEl = document.querySelector('[data-js="currency-one-times"]')

let internalExchangeRates = {}

const getUrl = currency => `https://v6.exchangerate-api.com/v6/c26590d4fd7236521a51fca0/latest/${currency}`

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
            throw new Error('Sua conexão falhou. Não foi possível obter informações da moeda.')
        }
        
        const exchangeRateData = await response.json()

        if(exchangeRateData.result === 'error') {
            throw new Error(messageError(exchangeRateData['error-type']))
        }

        return exchangeRateData

    }catch (err) {
        alert(err.message)
    }
} 

const init = async () => {
    const exchangeRateData = await fetchExchangeRates(getUrl('USD'))
        internalExchangeRates = {...exchangeRateData}

    const getOptions = currencySelect => Object.keys(internalExchangeRates.conversion_rates)
        .map(currency => `<option ${currency === currencySelect ? 'selected' : ''}>${currency}</option>`)
        .join('')
       
        currencyOneEl.innerHTML = getOptions('USD')
        currencyTwoEl.innerHTML = getOptions('BRL')

        convertedValueEl.textContent = internalExchangeRates.conversion_rates.BRL.toFixed(2)
        conversionPrecisionEl.textContent = `1 USD = ${internalExchangeRates.conversion_rates.BRL} BRL`
}

timesCurrencyOneEl.addEventListener('input', e => {
    convertedValueEl.textContent = (e.target.value * internalExchangeRates.conversion_rates[currencyTwoEl.value].toFixed(2))
})

currencyTwoEl.addEventListener('input', e =>  {
    const currencyTwo = internalExchangeRates.conversion_rates[e.target.value]

   convertedValueEl.textContent = (timesCurrencyOneEl.value * currencyTwo).toFixed(2) 
   conversionPrecisionEl.textContent = `1 ${currencyOneEl.value} = ${1 * internalExchangeRates.conversion_rates[currencyTwoEl.value]} ${currencyTwoEl.value}`
})

currencyOneEl.addEventListener('input', async e => {
    const exchangeRateData = await fetchExchangeRates(getUrl(e.target.value))
    internalExchangeRates = {...exchangeRateData}

    convertedValueEl.textContent = (timesCurrencyOneEl.value * internalExchangeRates.conversion_rates[currencyTwoEl.value]).toFixed(2)
    conversionPrecisionEl.textContent = `1 ${currencyOneEl.value} = ${1 * internalExchangeRates.conversion_rates[currencyTwoEl.value]} ${currencyTwoEl.value}`
})

init()



const APIKey = 'PyeBNPXTFvCPegzzt4xQ0hrTsa7THJbs'
const cityUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=Recife`

const getCityUrl = async () => {
  const response = await fetch(cityUrl)
    console.log(await response.json())
}

getCityUrl()
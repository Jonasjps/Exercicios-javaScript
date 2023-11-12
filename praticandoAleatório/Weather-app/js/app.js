const APIKey = 'jeX3bizd50163PRC3spxhyFJThOEvCYp'

const cityUrl = cityName => fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`)


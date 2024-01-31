
//criando objeto PokeApi
const pokeApi = {}


//criando uma função para pegar Pokemons, fetch utulizado no main anteriormente
//definimos valor default para offset e limit caso não sejam informados ao chamar a função
//função irá consumir a API e substituir parte do código do main
pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((responseBody) => responseBody.results)
        .catch((error) => console.error(error))
}
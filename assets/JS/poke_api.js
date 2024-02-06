
const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((responseBody) => responseBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))//utilizando a nova função
        //denominando a lista como detailRequests e realizando todas as requisições
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)//coletando os detalhes de cada pokemon em uma lista
}

//separando as funções 
pokeApi.getPokemonsDetails = (pokemon) => {
    //criando uma nova lista para coletar as urls de cada pokemon e converter em json seus reponses
    return fetch(pokemon.url).then((response) => response.json())
}

/*Exemplo Necessário melhorar a requisição para buscar mais dados dos pokemons
Utilizar Promise.all, ele reotrna um array de requisições
Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4')
]).then((results) => { //inserindo o retorno das requisições em uma lista denominada results
    console.log(results)
})*/
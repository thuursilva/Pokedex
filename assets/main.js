
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//minimizando código
fetch(url)
    //utilizando arrow function para retornar o response no formato json
    .then((response) => response.json())
    //printando o retorno do primeiro then da promise no console
    .then((responseBody) => console.log(responseBody))
    //utilizando arrow function para coletar possível erro tbm
    .catch((error) => console.log(error))
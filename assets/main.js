
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemon (pokemon){
    return `
    <li class="card">

    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">

        <ol class="types">
            <li class="type">Grass</li>
            <li class="type">Poison</li>
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
    </div>
    </li>`
}

//pegando a lista de pokemons no HTML
const pokemonList = document.getElementById('pokemonlist')


fetch(url)
    .then((response) => response.json())
    .then((responseBody) => responseBody.results)
    .then((pokemons) => {
        
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            //convertendo os pokemon e inserindo eles na lista do HTML
            pokemonList.innerHTML += convertPokemon(pokemon)
        }
    })
    .catch((error) => console.log(error))




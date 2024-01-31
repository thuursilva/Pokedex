
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


//chamando a função criada em PokeApi.js, dividindo o código
//alterando o a conversão dos pokemon em lista para renderizar a lista uma única vez pelo browser
pokeApi.getPokemons().then((pokemons) => {
        const listItems = []

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listItems.push(convertPokemon(pokemon))
        }

        console.log(listItems)
    })





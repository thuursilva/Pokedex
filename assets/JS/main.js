
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

const pokemonList = document.getElementById('pokemonlist')

pokeApi.getPokemons().then((pokemons = []) => {
        
    /*utilizando a função map para conversão da lista em HTML e substituir o for
    versão reduzida const newList = pokemons.map((pokemon) => convertPokemon(pokemon))
    versão ainda mais reduzida const newList = pokemons.map(convertPokemon)

    utilizando join para juntar todo o valor de newList em uma única string sem separador
    const newHtml = newList.join('')
    pokemonList.innerHTML += newHtml

    diminuindo código utilizando o join em conjunto const newList = pokemons.map(convertPokemon).join('')
    diminuindo completamente o código em uma única linha*/

    //agora em uma única linha nos mapeamos a lista de pokemons, convertemos em HTML e inserimos todos em uma string
    pokemonList.innerHTML += pokemons.map(convertPokemon).join('')


})





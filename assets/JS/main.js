
//criando uma lista para converter os tipos dos pokemons em li
//nos detalhes, cada tipo do pokemon fica dentro de um slot e possui um nome
function convertPokemonTypes(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

//após pegar os detalhes dos pokemon, podemos alterar na função de converter em Li
//chamando a função de converter tipos, passando os tipos do pokemon em uma string
//inserindo a foto do pokemon de forma dinâmica nos Sprites apresentados
function convertPokemon (pokemon){
    return `
    <li class="card">

    <span class="number">#${pokemon.id}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">

        <ol class="types">
            ${convertPokemonTypes(pokemon.types).join('')}
        </ol>

        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
    </li>`
}

const pokemonList = document.getElementById('pokemonlist')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemon).join('')
    pokemonList.innerHTML = newHtml
})





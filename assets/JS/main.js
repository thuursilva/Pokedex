//não hpa mais necessidade dessa função
/*function convertPokemonTypes(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}*/

//alterando a inserção de tipos e imagem
//inserindo nova classe html tipo, contendo o tipo primário do pokemon e possibilitar alteração de cor de fundo no css dinamicamente
function convertPokemon (pokemon){
    return `
    <li class="card ${pokemon.type}">

    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">

        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
        </ol>

        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
    </li>`
}

const pokemonList = document.getElementById('pokemonlist')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemon).join('')
    pokemonList.innerHTML = newHtml
})





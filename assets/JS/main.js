//inserindo os background dinamicamente pelo tipo
function convertPokemon (pokemon){
    return `
    <li class="card ${pokemon.type}">

    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">

        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
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





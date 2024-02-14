
const pokemonList = document.getElementById('pokemonlist')
const loadButton = document.getElementById('loadMore')
const limit = 10
const maxRecords = 151
let offset = 0

function loadPokemons(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="card ${pokemon.type}">
    
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
    
        <div class="detail">
    
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
    
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        </li> 
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemons(offset, limit)
loadButton.addEventListener('click', () =>{
    offset += limit
    const qtdRecords = offset + limit

    if(qtdRecords >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemons(offset, newLimit)
        loadButton.parentElement.removeChild(loadButton)
    }else {
        loadPokemons(offset, limit)
    }

})






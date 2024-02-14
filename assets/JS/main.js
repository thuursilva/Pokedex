
const pokemonList = document.getElementById('pokemonlist')
const loadButton = document.getElementById('loadMore')
const limit = 5
let offset = 0

//criando uma função para concatenar pokemons ao html já criado ao invés de substituir ao seleiconar "Load More"
//retirando a função de conversão e inserindo no map já existente
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

//chamando a função
loadPokemons(offset, limit)

//adicionando ação a ser efetuada a clicar no botão
//iremos incrementar em offset o valor de limit para carregar novos pokemon
loadButton.addEventListener('click', () =>{
    offset += limit
    loadPokemons(offset, limit)
})






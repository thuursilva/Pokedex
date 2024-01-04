
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//consumindo a url
fetch(url)
    //coletando o sucesso da requisição, caso tenha sucesso
    .then(function (response) {
        respon
    })
    //coletando possível erro da requisição, apenas retorna caso tenha erro
    .catch(function (error){
        console.log(error)
    })
    //conclusão da requisição, independente de erro ou sucesso
    .finally(function (){
        console.log('Requisição concluida')
    })

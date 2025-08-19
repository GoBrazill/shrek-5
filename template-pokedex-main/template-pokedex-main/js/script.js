let pokemon_name = document.getElementById ("pokemon_name")
let pokemon_number = document.getElementById ("pokemon_number")
let pokemon_image = document.getElementById ("pokemon_image")

let input_search = document.getElementById ("input_search")
let btn_search = document.getElementById ("btn-search")
let btn_prev = document.getElementById ("btn-prev")
let btn_next = document.getElementById ("btn-next")

let pokemonAtual = 1

const buscarPokemon = (pokemon) => {
    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then ((res) => res.json())
    .then ((data) => {
        console.log(data)
        pokemon_image.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
        pokemon_number.innerText = data.id    
        pokemon_name.innerText = data.name
        pokemonAtual = data.id
    })
    .catch ((err) => {
        pokemon_image.alt = "Não foi possível encontrar o pokemon"
        pokemon_name.innerText = "erro"
    })
}

btn_search.addEventListener ("click", function (event) {
    buscarPokemon(input_search.value)
    event.preventDefault()
})

btn_prev.addEventListener ("click", function (event) {
    // se ele já estiver no valor nenhum esse evento não faz nada :D
    if(pokemonAtual > 1) {
        pokemonAtual -= 1
        buscarPokemon(pokemonAtual)
    }
})

btn_next.addEventListener ("click", function (event) {
    pokemonAtual += 1
    buscarPokemon(pokemonAtual)
})

buscarPokemon(34)
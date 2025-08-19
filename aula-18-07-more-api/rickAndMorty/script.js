let nome = document.getElementById ("nome")
let especie = document.getElementById ("especie")
let img = document.getElementById ("img")
let btn = document.getElementById ("btn")

const buscarPersonagem = () => {
    fetch ("https://rickandmortyapi.com/api/character")
    .then ((res) => res.json())
    .then ((data) => {
        console.log(data.results[0])
        console.log(data.results[0].name)
        console.log(data.results[0].species)
        console.log(data.results[0].image)

        nome.innerText = data.results[0].name
        especie.innerText = data.results[0].species
        img.src = data.results[0].image
        
    })
}

btn.addEventListener ("click", function () {
    buscarPersonagem()
})
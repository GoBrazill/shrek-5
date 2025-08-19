// let titulo = document.getElementById ("titulo")
// let btn = document.getElementById ("btn")


// btn.addEventListener ("click", function () {
//     titulo.innerText = "texto"
// })

// evento "mouseover" (quando passar o mouse por cima) e "mouseout" (quando tira o mouse de cima)
// btn.addEventListener ("mouseout", function () {
//      titulo.innerText = "texto"
// })

// btn.addEventListener ("mouseover", function () {
//     titulo.style.backgroundColor = "red"
// })

// btn.addEventListener ("mouseout", function () {
//     titulo.style.backgroundColor = "green"
// })

// document.addEventListener ("keydown", function (event) {
//     if (event.key == "r") {
//         titulo.innerText = "red"
//     }
//     else if (event.key == "g") {
//         titulo.innerText = "green"
//     }
//     else if (event.key == "b") {
//         titulo.innerText = "blue"
//     }
// })

// let input = document.getElementById ("input")
// let btn = document.getElementById ("btn")
// let textWritten = document.getElementById ("text-written")

// // value = valor armazenado no input
// btn.addEventListener ("click", function () {
//     textWritten.innerText = input.value
// })


// Programação assíncrona
// console.log ("1. Iniciando")

// simulando uma terefa demorando e demonstrando como o javascript continua executanddo 
// o código mesmo que o executando ainda demore um pouco 
// setTimeout(() => {
//     console.log ("2. Executando")
// }, 2000);

// console.log ("3. Terminando")

// function pedirComida () {
//     setTimeout (() => {
//     console.log ("Pedindo Comida")
//     }, 2000)
// }

// function comendoComida () {
//     console.log ("Comendo Comida")
// }

// pedirComida()
// comendoComida()

// Função Call Back
function assarPizza(callback) {
    setTimeout(() => {
        console.log("Pizza Pronta!")
        callback()
    }, 2000);
}

function comerPizza() {
    console.log("Comendo a pizza")
}

console.log("Preparando a pizza")
assarPizza(comerPizza)

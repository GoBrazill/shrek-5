// Exercício - 1
let mouse = document.getElementById("mouse")

mouse.addEventListener ("mouseover", function () {
    mouse.style.backgroundColor = "lightblue"
})

mouse.addEventListener ("mouseout", function () {
    mouse.style.backgroundColor = "lightgray"
})

// Exercício - 2
let passarTexto = document.getElementById ("passar-texto")

passarTexto.addEventListener ("mouseover", function () {
    passarTexto.style.contentVisibility = "visible"
})

passarTexto.addEventListener ("mouseout", function () {
    passarTexto.style.contentVisibility = "hidden"
})

// Exercício - 3
let aumentar = document.getElementById ("aumentar")

aumentar.addEventListener ("mouseover", function () {
    aumentar.style.scale = 2
})

aumentar.addEventListener ("mouseout", function () {
    aumentar.style.scale = 1
})
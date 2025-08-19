// Exercício - 1
let p1 = document.getElementById ("p1")
let btn = document.getElementById ("btn")

btn.addEventListener ("click", function () {
    p1.style.fontWeight = "bold"
    p1.innerText = "Texto alterado com sucesso!"
})

// Exercício - 2
let divisor = document.getElementById ("divisor-de-aguas")
let btn2 = document.getElementById ("btn2")

btn2.addEventListener ("click", function() {
    divisor.style.backgroundColor = "yellow"
})

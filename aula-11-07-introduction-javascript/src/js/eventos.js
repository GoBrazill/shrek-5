// let btn = document.getElementById ("btn")
// let p1 = document.getElementById ("p1")

// const alerta = (btn) => {
//     alert("Você clicou na página")
// }

// forma antiga de fazer um evento, mas não permite mais de uma evento por função
// btn.onclick = function () {
//     alert ("Você clicou aqui")
// }

// forma mais atual e mais utilizada, permite adicionar mais de um evento
// btn.addEventListener("click", function () {
//     alert("Você clicou no botão?")
// })

// evento que altera o texto em p1 ao clicar no botão
// btn.addEventListener("click", function () {
//     p1.innerText = "texto trocado"
// })

// alert(`Tecla presionada: ${event.key}`)
document.addEventListener ("keydown", function(event){
    if (event.key == "r") {
        document.body.style.backgroundColor = "red"
    }
    else if (event.key == "g") {
        document.body.style.backgroundColor = "green"
    }
    else if (event.key == "b") {
        document.body.style.backgroundColor = "blue"
    }
})
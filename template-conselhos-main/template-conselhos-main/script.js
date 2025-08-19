let advice = document.getElementById ("advice")
let conselho_gerado = document.getElementById ("conselho-gerado")
let conselho = document.getElementById ("conselho")

const gerarConselho = () => {
    fetch ("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
        console.log (data.slip.advice)
        conselho_gerado.innerText = data.slip.advice
    })
    .catch((err) => {
        conselho_gerado.innerText = "Não foi possível gerar um conselho"
    })
}


conselho.addEventListener("click", function () {
    conselho_gerado.innerText = "Carregando."
    setTimeout(() => {
        conselho_gerado.innerText = "Carregando.."
    }, 1000);
    setTimeout(() => {
        conselho_gerado.innerText = "Carregando..."
    }, 1500);
    gerarConselho()
})
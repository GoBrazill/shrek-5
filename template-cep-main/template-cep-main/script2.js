let input_cep = document.getElementById ("input_cep")
let btn_cep = document.getElementById ("btn-cep")

let logradouro = document.getElementById ("logradouro")
let bairro = document.getElementById ("bairro")
let regiao = document.getElementById ("regiao")
let estado = document.getElementById ("estado")

const buscarCep = (cep) => {
    fetch (`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
            console.log (data)
            // esqueci como era pra declarar o innertext
            logradouro.innerText = data.logradouro
            bairro.innerText = data.bairro
            regiao.innerText = data.regiao
            estado.innerText = data.estado
        })
    }

// esqueci do prevent default
btn_cep.addEventListener ("click", function (event) {
    buscarCep(input_cep.value)
    event.preventDefault() 
})    

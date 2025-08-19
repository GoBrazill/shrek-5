let nome = document.getElementById ("nome")
let email = document.getElementById ("email")
let username = document.getElementById ("username")
let btn = document.getElementById ("btn")

const buscarUsuario = () => {
fetch ("https://jsonplaceholder.typicode.com/users")
    .then ((res) => res.json())
    .then ((data) => {
        console.log(data[0])
        nome.innerText = data[0].name
        email.innerText = data[0].email
        username.innerText = data[0].username
    })
    .catch((err) => {
        nome.innerText = "Não foi possível encontrar o usuário"
        email.innerText = "Não foi possível encontrar o usuário"
        username.innerText = "Não foi possível encontrar o usuário"
    })
}
    

btn.addEventListener("click", function () {
    buscarUsuario()
})
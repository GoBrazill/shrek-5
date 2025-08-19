// Consumir uma api usando fetch e a url da api
// res.json converte o arquivo de texto para objeto em javascript
// todas vez ao trabalhar com api usar o console.log data para ver os elementos no html

let nome = document.getElementById("nome") 
let email = document.getElementById("email")
let username = document.getElementById("username")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        console.log (data[0])
        nome.innerText = data[0].name
        email.innerText = data[0].email
        username.innerText = data[0].username
    })
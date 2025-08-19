let name = document.getElementById("name")
let email = document.getElementById("email")
let username = document.getElementById("username")

fetch ("https://jsonplaceholder.typicode.com/users")
    .then ((res) => res.json())
    .then((data) => {
        
    })
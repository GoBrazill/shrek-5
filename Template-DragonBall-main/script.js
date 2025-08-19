// como declarar forEach no javascript
// let nomes = ["a", "b", "c"]

// nomes.forEach(function (i) {
//     console.log(i)
// });

let personagens_container = document.getElementById("personagens-container")

fetch ("https://dragonball-api.com/api/characters?page=1&limit=58")
    .then ((res) => res.json())
    .then ((data) => {
        console.log(data.items)
        data.items.forEach(element => {
            
            // isso cria uma variável para o html
            const card = document.createElement ("div")
            card.className = "card"
            card.innerHTML = `
                <img src = "${element.image}"/>
                <h2>${element.name}</h2>
                <p>Raça: ${element.race}</p>
                <p>Gênero: ${element.gender}</p>
            `
            // adiciona o conteúdo acima ao html
            personagens_container.appendChild(card)
        });
    })
    .catch ((err) => {

    })
// FUNÇÃO CALLBACK

// function fazerAlgo(callback) {
//     setTimeout (() => {
//         console.log("Iniciando...")
//         callback()
//         console.log("Finalizando...")
//     }, 2000)
// }


// function minhaCallback() {
//     console.log ("Executando minha Callback")
// }

// fazerAlgo(minhaCallback)

// function pedirComida(callback) {
//     console.log ("Pedido feito... Aguarde! ")
//     setTimeout(() => {
//         console.log ("Pedido pronto!")
//         callback()
//     }, 2000);
// }

// function comer() {
//     console.log ("Comendo a comida!")
// }

// pedirComida(comer)

// const pizzaChegou = true

// const chegou = () => {
//     console.log ("A pizza chegou!")
// }

// const cancelado = () => {
//     console.log("Pedido cancelado")
// }

// const pedido = (callbackSuccess, callbackError) => {
//     if (pizzaChegou == true) {
//         callbackSuccess()
//     } else {
//         callbackError()
//     }
// }

// pedido (chegou, cancelado)

// FUNÇÃO PROMISSES (Resolve = success, Reject = error)

// const pizza = true

// const pedido = new Promise((resolve, reject) => {
//     if (pizza == true) {
//         resolve("A pizza chegou!")
//     } else {
//         reject("Pedido cancelado!")
//     }
// })

// pedido 
//     .then((res) => {
//         console.log (res)
//     })
//     .catch((err) => {
//         console.log (err)
//     })

const buscarUsuario = new Promise((resolve, reject) => {
    console.log ("buscando usuário no banco...⌛")

    setTimeout (() => {
        const encontrado = true

        if (encontrado) {
            resolve ({
                nome: "Vinicius",
                email: "exemplo@gmail.com",
                idade: 20
            })
        } else {
            reject ("Usuário não encontrado!")
        }
    }, 2000)
})

buscarUsuario
    .then ((res) => {
        console.log (res)
    })
    .catch((err) => {
        console.log(err)
    })
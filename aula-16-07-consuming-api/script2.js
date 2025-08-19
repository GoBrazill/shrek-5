// chamar ".then" quando for resolve e chamar ".catch" quando for reject
const verificarResultado = new Promise ((resolve, reject) => {

    let result = 1 + 3

    if (result == 2) {
        resolve("Uhull! é 2!")
    }  else {
        reject("rapaiz... não é 2")
    }
})

// aceita no paremetro tanto resolve e error quanto res (respond) e err (error)
verificarResultado
    .then((res) => {
        console.log (res)
    })
    .catch((err) => {
        console.log (err)
    })
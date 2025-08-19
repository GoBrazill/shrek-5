// exercício - 1
let i = 1

while (i <= 10) {
    console.log (i)
    i++
}

// exercício - 2
let j = 2

while (j <= 20) {
    console.log (j)
    j += 2
}
// exercício - 3
let k = 50

while (k >= 0) {
    console.log (k)
    k -= 5
}
// exercício - 4
let senha = "admin"
let tentativa = prompt ("Informe sua senha: ")

while (tentativa != senha) {
    alert("senha incorreta")
    tentativa = prompt("Informe sua senha: ")
}
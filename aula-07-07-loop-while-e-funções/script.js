// let i = 1

// while (i <= 5) {
//     console.log (`número ${i}`)
//     i++
// }

// let senha = "abc"
// let senhaDigitada = prompt("Informe sua senha: ")

// while (senhaDigitada != senha) {
//     alert("Senha incorreta")
//     senhaDigitada = prompt("Informe sua senha: ")
// }

// Funções
// function nomeDaFuncao () {

//}

// function dizerOla () {
//     console.log ("Olá!")
// }

// dizerOla ()


// jeito de declarar uma função no caso dela ter apenas um propósito
// function fazerSuco() {
//     console.log ("Fazendo sudo de laranja")
// }

// fazerSuco ()


// modo flexível com um parâmetro no caso que uma função irá alterar alguma coisa na função 
// function fazerSuco(suco) {
//     console.log (`Fazendo sudo de ${suco}`)
// }

// fazerSuco("Uva")

// let n1 = 25
// let n2 = 19
// let result = n1 + n2
// console.log (result)

// let n3 = 10
// let n4 = 51
// let result2 = n3 + n4
// console.log (result2)

// let n5 = 1
// let n6 = 29
// let result3 = n5 + n6
// console.log (result3)

// jeito mais eficiente de fazer as mesmas contas usando uma função invés de usar uma função
// function somar(p1, p2) {
//     console.log(`Resultado da soma: ${p1 + p2}`)
// }

// somar (25, 19)
// somar (10, 51)
// somar (1, 29)

// funções anônimas (onde não precisa definir um nome para ela)

// console.log ("Começando")

// setTimeout(function() {
//     console.log ("Terminando")
// }, 2000) 

// Função sem retorno (não armazena o valor)
// function dobro(numero) {
//     numero * 2
// }

// let result = dobro(2)
// console.log (result)

// Função com retorno (armazena o valor depois de fazer a conta)
// function quadrado(numero) {
//     return numero * numero
// }

// console.log(quadrado(4))


// Arrow Functions (por causa do =>(flecha xD))
// Mesma coisa que uma função normal, sendo uma forma moderna de declarar uma função
// const dobrar = (numero) => {
//     console.log (numero * 2)
// }

// dobrar (10)
// também é possível declarar da forma : const dobrar = (n) => n * 2 
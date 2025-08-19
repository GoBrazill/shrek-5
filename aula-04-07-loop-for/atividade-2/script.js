// Exercício - 1
let mes = 2

switch (mes) {
    case 1:
        console.log("Janeiro")
    break
    case 2:
        console.log("Fevereiro")
    break
    case 3:
        console.log("Março")
    break
    default: 
        console.log("Não sei que mês é esse não rapá!")
}

// Exercício - 2
let usuário = "admin"

switch (usuário) {
    case "admin":
        console.log ("acesso total")
    break
    case "editor":
        console.log ("acesso limitado")
    break
    case "visitante":
        console.log ("acesso somente leitura")
    break
    default:
        console.log ("Opção Inválida")
}

// Exercício - 3
let num1 = 5
let num2 = 10
let operacao = "+"

switch (operacao) {
    case "+":
        console.log (num1 + num2)
    break
    case "-":
        console.log (num1 - num2)
    break
    case "*":
        console.log (num1 * num2)
    break
    case "/":
        console.log (num1 / num2)
    break
    default:
        console.log ("Opção Inválida!")
}
// system out print do javascript
// console.log("Olá!")

// não precisa de definir qual o tipo de variável 
// int = 5
// console.log(int)

// tipo de variável var (normalmente não é usado pelo problema de poder ser redeclarada a variável)

// var cidade = "São Paulo"
// cidade = "Parmeira"
// if (cidade != "São Paulo") {
//     console.log("cidade errada rapá")
// } else {
//     console.log("Cidade: " + cidade)
// }

// variável let (normalmente mais utilizada por não ter o mesmo problema do var)

// let nome = "Vini"
// nome ="Thiago"
// console.log(nome) 

// variável const (para variáveis que não irão mudar o valor)

// const pi = 3.14

// não aceita troca de valor então irá dar erro
// pi = "adalberto"
// console.log(pi)


// Dados Primitivos

//  String - "texto"

// // é possível imprimir tanto com , quanto + para imprimir mais de uma coisa
// let nome = "Vini"
// let sobrenome = "Silva"
// console.log(nome, sobrenome)

// number - número

// const idade = 20

// boolean - verdadeiro / falso

// let maiorDeIdade = true

// null - nulo

// só aparece se o programador quiser que apareça (o sistema não gera a resposta null)
// let nome = null

// undefined - não deffinida (o sistema não encontrou a variável ou não foi definida)

// let nome = undefined

// Dados Estruturados

// array - matriz

// let frutas = ["pera", "manga", "melancia", 32]
// console.log(frutas)

// desta forma ele vai imprimir undefined
// let nums = [10, 20, 30]
// console.log(nums[3])

// objeto

// let aluno = {
//     nome: "Vini",
//     idade: 20,
//     profissao: "?"
// }

// para se referir a um elemento específico é usando ponto
// console.log(aluno.nome)

// let produto = {
//     nome: "Notebook",
//     preco: 7.600,
//     emEstoque: true
// }
// console.log(produto.emEstoque)

// forma mais organizada de imprimir elementos com uma frase
// let nome = "Vini"
// let idade = 20
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
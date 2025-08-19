// EX01
// Crie uma função baixarArquivo(callback).
// Simule um tempo de espera com setTimeout().
// Após o tempo, exiba "Download concluído!".
// Chame uma função de callback que exibe "Abrindo arquivo...".
function baixarArquivo(callback) {
    console.log ("Baixando arquivo...")
    setTimeout (() => {
        console.log ("Download concluído!")
        callback()
    }, 2000);
}

const abrirArquivo = () => {
    console.log ("Abrindo arquivo...")
}

baixarArquivo(abrirArquivo)

// EX02
// Crie uma função processarDados(callback).
// Dentro dela, simule o processamento com setTimeout().
// Após 2 segundos, exiba "Dados processados!".
// Em seguida, chame uma função de callback que exibe "Mostrando resultado na tela...".
function processarDados(callback) {
    console.log ("Processando dados...")
    setTimeout (() => {
        console.log ("Dados processados!")
        callback()
    }, 2000)
}

const mostrarResultados = () => {
    console.log ("Mostrando resultado na tela...")
}
processarDados(mostrarResultados)

// EX03
// Crie uma função enviarNotificacao(callback).
// Simule um envio com setTimeout() por 1,5 segundo.
// Depois, exiba "Notificação enviada!".
// Logo após, chame uma função de callback que mostra "Confirmação: notificação entregue.".
function enviarNotificacao(callback) {
    console.log ("Enviando Notificação")
    setTimeout (() => {
    console.log ("Notificação enviada!")
    callback()
    }, 2000)
}

function confirmacao() {
    console.log ("Confirmação: notificação entregue.")
}

enviarNotificacao(confirmacao)

// Ex04
// Crie uma função carregarProduto(callback).
// Use setTimeout() para simular um carregamento de 1 segundo.
// Depois, exiba "Produto carregado com sucesso!".
// Na sequência, execute a função de callback que exibe "Exibindo detalhes do produto.".
function carregarProduto(callback) {
    console.log ("Carregando produto...")
    setTimeout (() => {
        console.log ("Produto carregado com sucesso!")
        callback()
    }, 2000)
}

function detalhesProduto() {
    console.log ("Exibindo detalhes do produto.")
}

carregarProduto(detalhesProduto)
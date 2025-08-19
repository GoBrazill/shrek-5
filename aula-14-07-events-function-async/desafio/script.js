let input = document.getElementById ("input")
let btn = document.getElementById ("btn")
let span = document.getElementById ("span")

const conversor = (n1) => (n1 * 9 / 5) + 32 

btn.addEventListener ("click", function () {  
    span.innerText = `${conversor (input.value)}°F`
})
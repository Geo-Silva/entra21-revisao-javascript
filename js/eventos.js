function botaoClicado() {
    alert("Mas tu é insistente mesmo em? Falei que o troço não faz nada...")
}

let valor1 = 20
let valor2 = 32

function fazerSoma() {

    let resultado = (valor1 + valor2)
    console.log(resultado);

}

fazerSoma()

let valor3 = 231
let valor4 = 157

function fazerSub() {

    let resultado = (valor3 - valor4)
    console.log(resultado);

}

fazerSub()

let valor5 = 1000
let valor6 = 120

function fazerDiv() {

    let resultado = (valor5 / valor6)
    console.log(resultado);

}

fazerDiv()

let valor7 = 10
let valor8 = 22

function fazerMult() {

    let resultado = (valor7 * valor8)
    console.log(resultado);

}

fazerMult()

/*

"No html não teve ter menção ao javascript, 
mas deve permitir o acesso facilitado ao mesmo por id,class ou nome do seletor"

Não entendi exatamente o que fazer nessa parte. Usar IDs, Class e <> para identificar elementos no HTML?
Se for isso então já está feito. Se for outra coisa, eu não entendi exatamente. Como assim o HTML não mencionaria o JS?
Como iria rolar o Script então? Acabei por deixar em "branco" então. Já que o que eu entendi já está sendo feito 

*/

$("#fazAlgoSim").on("click", function () {
    console.log("O botão realmente funciona! Eu quem programei afinal...");
    alert("Realmente faz algo!")
    alert("Rouba seus dados bancários :) ☠")
    alert("É brincadeira, me prende não. Olha o código aí, tem nada demais sinhô")
})

$("#enviar").on("click", function () {

    let nome = $("#nome").val()
    let idade = $("#idade").val()
    console.log("Este usuário é " + nome + " e tem " + idade + " anos");

})
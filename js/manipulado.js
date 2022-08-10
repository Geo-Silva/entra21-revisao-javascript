let primeiro = document.getElementById("primeiro")
console.log(primeiro);

let classificao = document.getElementsByClassName("bg-success")
console.log(classificao);

let tag = document.getElementsByTagName("b")
console.log(tag);

function adcElemento() {
    var elemento = document.createElement("p");
    elemento.innerHTML = "Texto criado pelo JS. UAU (fora do card mas blz)";
    document.body.appendChild(elemento);

}
/*
function adcElementoTag() {

    let app = document.querySelector('#epa');

    let langs = ['TypeScript','HTML','CSS'];
    
    let nodes = langs.map(lang => {
        let li = document.createElement('li');
        li.textContent = lang;
        return li;
    });
    
    app.append(...nodes);

    //Deixei até igual ao site que eu peguei para testar se eu estava fazendo algo errado, só alterei a ID
    //Testei outros tipos de soluções, nenhuma funcionou.
}

Nota:
Tentei fazer isso de todos jeitos possíveis. Pesquisei na internet até
De todo jeito NADA resolveu. Fica dando esse erro:
Uncaught TypeError: Cannot read properties of null (reading 'append')
Vi todo tipo de solução e nada resolve
Eu olhei se os elementos e IDs realmente existem e existem sim
Não há razão para o código não ler o Append, ele funcionou no caso acima, e por que não agora?

*/

/*

function adcElemento1() {

    let epa = document.querySelector("#epa")
    epa.append("Funcione")

}

Esse é mais um exemplo de algo que deveria funcionar e resulta no mesmo erro de antes
Como proceder nesse caso? Vou pular essa parte, jQuery realmente é mil vezes melhor para fazer essas coisas
Não é como se eu não soubesse como fazer para adicionar um elemento no HTML via uma ID pelo JS
É que esse problema realmente me deu um nó na cabeça, não faz sentido eu seguir todos os exemplos da internet e nada resolver

*/

adcElemento()
//adcElemento1()
//adcElementoTag()

//finalmente jQuery, agora entendo como ele realmente ajuda na vida. JS puro é dor de cabeça, Java me é mais fácil

let elementar = $("#zoa")

$("#zoa").each(function () {
    console.log(this.textContent)

})

$("#zoa").each(function () {

    console.log(elementar)
    //creio que seja isso que "Exiba em log o conteúdo HTML desse elemento" signifique
})

$("#paragrafo").text("...meu caro Wattson")

$("<p>", {
    text: "Esse site está confuso"
}).appendTo("#paragrafo")

let busca = $("body").find("p").css("text-bg-danger")
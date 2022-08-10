
let umaString = "textinho"
let umaNumber = 20
let umaVerdade = true
let umaLista = [...document.getElementsByTagName("p")]

function lendoVar() {

    console.log(umaString);
    console.log(umaNumber);
    console.log(umaVerdade);
    console.log(umaLista);

}

function tiposVar() {
    console.log(typeof (umaString));
    console.log(typeof (umaNumber));
    console.log(typeof (umaVerdade));
    console.log(typeof (umaLista));

}

function fazendoIfs() {

    if (umaString == "textinho") {
        console.log("textinho é uma String oras");
    } else {
        console.log("nunca vai passar aqui o código");
    }

    if (umaNumber > 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }

    if (umaVerdade == true) {
        console.log("A verdade é dura as vezes");
    } else {
        console.log("Não sei o que o texto acima significa");
    }

}

function fazendoSwitchs() {

    switch (umaString) {
        case "textinho":
            console.log("Mais texto inútil aqui");
            break;

        case "seila":
            console.log("Que palhaçada!");
            break;

        default:
            break;
    }

    switch (umaNumber) {
        case 20:
            console.log("É a idade do cara que fez esse site sabia? ", umaNumber);
            break;

        case 21:
            console.log("E a namorada dele é mais velha O.O", umaNumber);
        default:
            console.log("Como assim não tem valor?? Site louco");
            break;
    }

}

function fazendoFor() {

    umaLista.forEach(paragrafos => {
        console.log(paragrafos.textContent);
    });

    for (let index = 0; index <= umaLista.length; index++) {
        if (index == 2) {

            console.log("Leitura da lista completada");
            console.log("Não que eu vá falar o que eu achei :P");

        } else {
            console.log("Lendo lista...");
        }

    }
}

lendoVar()
tiposVar()
fazendoIfs()
fazendoSwitchs()
fazendoFor()
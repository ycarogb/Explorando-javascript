let inputInicio = document.getElementById('valorInicio');
let inputFim = document.getElementById('valorFim');
let inputPasso = document.getElementById('valorPasso');
let resultado = document.getElementById('resultado');

function contar() {
    let valorInicio = Number(inputInicio.value);
    let valorFim = Number(inputFim.value);
    let valorPasso = Number(inputPasso.value);

    if (inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPasso.value.length == 0) {
        return alert('[ERRO] Faltam dados');
    }

    if (valorInicio > valorFim) {
        return alert('[ERRO] Valor final não pode ser menor que o inicial!');
    }

    if (valorPasso == 0) {
        valorInicio = 1;
        alert('[ATENÇÃO] Contagem realizada considerando PASSO 1');
    }

    preencherResultado(valorInicio, valorFim, valorPasso);
}

function preencherResultado (valorInicio, valorFim, valorPasso) {
    resultado.innerHTML = `Contando: `;

    for (let contador = valorInicio; contador <= valorFim; contador += valorPasso) {
        resultado.innerHTML += `${contador} &#128073;`
    }

    resultado.innerHTML += `&#127937;`
}
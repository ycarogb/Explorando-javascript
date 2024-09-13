function calcular () {
    let numero = document.getElementById('numero');
    let valorTabuada = Number(numero.value);
    
    if (numeroDigitado(numero)) { 
        calcularTabuada(valorTabuada);
    }
}

function numeroDigitado (numero) {
    if (numero.value.length == 0) {
        alert('[ERRO] Insira um número inteiro para multiplicação');
        return false;
    }

    return true;
}

function calcularTabuada (valorTabuada) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        let linha = document.createElement('option');
        let produto = multiplicador * valorTabuada;
        linha.label = `${multiplicador} x ${valorTabuada} = ${produto}`
        resultado.appendChild(linha);
    }
}
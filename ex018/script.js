let numero = document.getElementById('numero');
let selectResult = document.getElementById('numerosEscolhidos');
let resultado = document.getElementById('textoResultado');
let valores = [];

function isNumero(numero) {
    if (Number(numero) >=1 && Number(numero) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(numero, valores) {
    if (valores.indexOf(Number(numero)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionarNumero() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value));
        let item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado.`;
        selectResult.appendChild(item);
        resultado.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista');
    }

    numero.value = '';
    numero.focus();
}

function analisarNumeros() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let totalValores = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }


        media = soma / totalValores;
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo, temos ${totalValores} números cadastrados.</p>`;
        resultado.innerHTML += `<p>O maior valor foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor foi ${menor}.</p>`
        resultado.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores é ${media}.</p>`

    }

}
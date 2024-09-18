function parimpar(numero) {
    if (numero%2 == 0) {
        return 'par';
    } else {
        return 'impar';
    }
}

//chamada da função
let resultado = parimpar(5);

console.log(resultado);

//podem existir parametros pre-definidos 

function somar (numero1, numero2=0) {
    return numero1 + numero2;
}

console.log('-----')
console.log(somar(1));

//variáveis tambem podem receber funções

let calcularDobro = function(numero) {
    return numero*2;
}

console.log('--------------------------');
console.log(`O dobro do número 125 é ${calcularDobro(125)}`);
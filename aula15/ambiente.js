let numeros = [5, 2, 9, 3];

console.log(`nosso vetor é o ${numeros}`);

//para acrescentar um valor 
numeros.push(4);

console.log(`nosso novo vetor é o ${numeros}`);

//retorna o tamanho do array -> ATRIBUTO length

console.log(`O array tem ${numeros.length} elementos`);

//coloca os elementos em ordem crescente

console.log(`O arrray em ordem é ${numeros.sort()}`)

//mostra os valores do array
//novo formato com for!!
for(let numero in numeros) {
    console.log(`O elemento ${numero} tem valor ${numeros[numero]}`);
}

//para identificar elementos num array
let posicaoValor = numeros.indexOf(4)
console.log(`o valor 4 está na posição ${posicaoValor}`);

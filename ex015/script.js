let date = new Date();
let ano = date.getFullYear();

function verificar() {
    let anoFormulario = document.getElementById('textoAno');
    let inputSexo = document.getElementsByName('radioSexo');
    let idade = ano - Number(anoFormulario.value);
    let genero = definirGenero(inputSexo);
    
    let imagem = document.createElement('img'); //cria novo objeto html do tipo "img"
    imagem.setAttribute('id', 'foto'); //define um id para o objeto html criado

    verificarInput(anoFormulario);
    definirImagem(idade, genero, imagem);
    montarResultado(idade, genero, imagem);
}

function verificarInput(input) {
    if(input.value.length == 0) {
        window.alert('[ERRO] Ano de nascimento não informado.');
        window.location.reload(true);
    } else if (Number(input.value) > ano) {
        window.alert('[ERRO] Ano de nascimento não pode ser maior que o ano atual.')
        window.location.reload(true);
    }
}

function definirGenero(input) {
    if (input[0].checked) {
        return 'homem';
    } else {
        return 'mulher';
    }
}

function definirImagem(idade, genero, imagem) {
    if (idade >= 0 && idade < 10) {
        imagem.setAttribute('src', `images/${genero}Crianca.png`);
    } else if (idade < 21) {
        imagem.setAttribute('src', `images/${genero}Adolescente.png`);
    } else if (idade < 50) {
        imagem.setAttribute('src', `images/${genero}Jovem.png`);
    } else if (idade > 50 && genero == 'homem') {
        imagem.setAttribute('src', `images/${genero}Velho.png`);
    } else {
        imagem.setAttribute('src', `images/${genero}Velha.png`);
    }
}

function montarResultado(idade, genero, imagem) {
    let resultado = document.getElementById('resultado');
    resultado.style.textAlign = 'center'; //alterando estilo da div com o javascript
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    resultado.appendChild(imagem);
}
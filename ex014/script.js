let mensagem = window.document.getElementById('mensagem');
let imagem = window.document.getElementById('imagem');
let date = new Date();
let horas = date.getHours();

function carregar() {
    montarMensagem(horas);
    definirImagem(horas);
}


function montarMensagem(horas){
    mensagem.innerHTML = `Agora são <strong>${horas} horas</strong>.`;
}

function definirImagem(horas) {
    if(horas >= 0 && horas < 12) {
        imagem.src = 'images/manha.png';
        document.body.style.background = 'yellow';
    } else if (horas >= 12 && horas <= 18) {
        imagem.src = 'images/tarde.png';
        document.body.style.background = 'orange';
    } else {
        imagem.src = 'images/noite.png';
        document.body.style.background = 'purple';
    }
}


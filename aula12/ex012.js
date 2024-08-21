var date = new Date();
var hora = date.getHours();

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 6 && hora < 12) {
    console.log('Boa madrugada!');
} else if (hora > 6 && hora < 12) {
    console.log('Bom dia!');
} else if (hora <= 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}
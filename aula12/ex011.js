var turno = "";
var agora = new Date();
var hora = agora.getUTCHours();

if (hora <= 00 && hora < 06) {
    console.log("Boa noite")
    turno = "Noite"
} else if (hora >= 07 && hora < 12) {
    console.log("Bom dia")
    turno = "Manhã"
} else if (hora >= 13 && hora <= 18) {
    console.log("Boa tarde")
    turno = "Tarde"
} else {
    console.log("Boa noie")
    turno = "Noite"
}

console.log(`Agora são ${hora} Horas da ${turno}!`)
function carregar() {
    var msg = window.document.querySelector("div#msg")
    var img = window.document.querySelector("img#img")
    var data = new Date;
    var hora = data.getHours();
    msg.innerHTML = `Àgora são ${hora} horas`

    if (hora <= 00 && hora < 06) {
        img.src = 'img/noite.png'
        document.body.style.background = "#0800FF";

    } else if (hora >= 07 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = "#FFBD17";

    } else if (hora >= 13 && hora <= 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = "#FF530D";

    } else {
        img.src = 'img/noite.png'
        document.body.style.background = "#0800FF";
    }

}

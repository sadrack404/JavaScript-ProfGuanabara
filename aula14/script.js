function verificar() {
    var date = new Date;
    var ano = date.getFullYear();

    var fano = window.document.querySelector("input#txtano")
    var resposta = window.document.querySelector("p#resposta")

    if (fano.value.length == 0 || fano > ano) {
        console.log = resposta.innerText(`[ERRO] Digite uma data válida`)
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""

        //Criando uma imagem dinâmica no html através do JS
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {

            genero = "Masculino"
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {

            genero = "Feminino"
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        resposta.style.textAlign = 'center';
        resposta.innerHTML = `Você tem ${idade} anos, seu gênero é ${genero}`
        resposta.appendChild(img)
    }
}
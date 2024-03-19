var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var body = window.document.getElementById('corpo')
var time = new Date()
var hora = time.getHours()  

function ver(){
    if (hora < 12) {    //manha
        msg.innerHTML = `Bom dia! Agora são: ${hora}h`
        body.style.background = 'yellow'
        var img = "Modulo D\aula12\aula12ex\ex014\img\manha.jpg"
        document.getElementById('img').src = img

    }else if(hora < 18){    //tarde
        msg.innerHTML = `Boa tarde! agora são: ${hora}h`
        body.style.background = 'orange'
        var img = "Modulo D\aula12\aula12ex\ex014\img\tarde.jpg"
        document.getElementById('img').src = img

    }else{  //noite
        msg.innerHTML = `Boa noite! agora são: ${hora}h`
        body.style.background = 'blue'
        var img = "Modulo D\aula12\aula12ex\ex014\img\noite.jpg"
        document.getElementById('img').src = img
    }
}
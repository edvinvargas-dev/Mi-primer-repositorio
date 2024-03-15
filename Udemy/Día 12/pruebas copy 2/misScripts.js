let campo = document.getElementById("miCampo");

function validarx(event){
    if(event.keyCode < 48 || event.keyCode >57){
        event.preventDefault()
    }
}

campo.addEventListener("keydown",validarx)